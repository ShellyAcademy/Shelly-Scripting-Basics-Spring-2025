let CONFIG = {
    KVS_SCHEDULE_ID_SUNRISE: "Sunrise-Schedule",
    KVS_SCHEDULE_ID_SUNSET: "Sunset-Schedule"
};

function isoToTimespec(isoStr) {
    let timePart = isoStr.split("T")[1]; // 20:24
    let parts = timePart.split(":"); // ["20", "24"]
    let hour = parts[0];
    let minute = parts[1];
    return "0 " + minute + " " + hour + " " + " * * *";
}

function createSchedule(timespecData, on, scheduleType) {
    Shelly.call("Schedule.Create", {
        enable: true,
        timespec: timespecData,
        calls: [
            {
                method: "Switch.Set",
                params: {
                    id: 0,
                    on: on // true or false
                },
            }
        ],
    }, function (result) {
        let key;
        console.log("RESULT: ", result);
        if (scheduleType === "sunrise") {
            key = CONFIG.KVS_SCHEDULE_ID_SUNRISE;
        } else {
            key = CONFIG.KVS_SCHEDULE_ID_SUNSET;
        }
        Shelly.call("KVS.Set", { key: key, value: result.id });
    }
    )
}

function updateSchedule(scheduleId, timespec) {
    Shelly.call("Schedule.Update", {
        id: scheduleId,
        timespec: timespec
    }, function (result) {
        console.log("Schedule with ID", scheduleId, "updated. New timespec:", timespec);
    });
}

function installSchedule() {
    Shelly.call("HTTP.Get", { url: "https://api.open-meteo.com/v1/forecast?latitude=42.136097&longitude=24.742168&daily=sunrise,sunset&timezone=auto" }, function (result) {
        let response = JSON.parse(result.body);
        let nextSunrise = response.daily.sunrise[0];
        let nextSunset = response.daily.sunset[0];
        // console.log(nextSunrise);

        let scheduleTimeSunrise = isoToTimespec(nextSunrise);
        let scheduleTimeSunset = isoToTimespec(nextSunset);

        Shelly.call("KVS.Get", { key: CONFIG.KVS_SCHEDULE_ID_SUNRISE }, function (result, error_code, error_message) {
            if (error_code != 0) {
                // KVS KEY DO NOT EXISTS -> Schedule does not exist, create it
                // console.log("Sunrise Schedule not created yet: Creating Schedule.");
                console.log(scheduleTimeSunrise);
                createSchedule(scheduleTimeSunrise, true, "sunrise");
            } else {
                // KVS KEY EXISTS -> Schedule already exists, update it
                console.log("Sunrise Schedule already created: Updating schedule.");
                updateSchedule(result.value, scheduleTimeSunrise);
            }
        });

        Shelly.call("KVS.Get", { key: CONFIG.KVS_SCHEDULE_ID_SUNSET }, function (result, error_code, error_message) {
            if (error_code != 0) {
                // KVS KEY DO NOT EXISTS -> Schedule does not exist, create it
                console.log("Sunset Schedule not created yet: Creating Schedule.");
                createSchedule(scheduleTimeSunset, false, "sunset");
            } else {
                // KVS KEY EXISTS -> Schedule already exists, update it
                console.log("Sunset Schedule already created: Updating schedule.");
                updateSchedule(result.value, scheduleTimeSunset);
            }
        });

    })
}

installSchedule();