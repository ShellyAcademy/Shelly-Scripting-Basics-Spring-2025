let CONFIG = {
    KVS_KEY: "Script-Schedule-" + Shelly.getCurrentScriptId(),
    SCHEDULE_TIMESPEC: "0 53 21 * * *",
    SCHEDULE_ID: -1
};

function register() {
    Shelly.call("KVS.Get", { key: CONFIG.KVS_KEY }, function (result, error_code, error_message) {
        if (error_code !== 0) {
            // KVS KEY NOT FOUND
            console.log("Schedule not created yet: Install schedule");
            installSchedule();
            return;
        }
        CONFIG.SCHEDULE_ID = result.value;
        console.log("Schedule with ID", CONFIG.SCHEDULE_ID, "already created!");
        // check if schedule still exists
        // if doeos not exist, install it
        Shelly.call("Schedule.List", {}, function (result) {
            for (let i = 0; i < result.jobs.length; i++) {
                if (result.jobs[i].id === CONFIG.SCHEDULE_ID) return;
            }
            console.log("Schedule ID", CONFIG.SCHEDULE_ID, " not found. Installing new schedule.");
            installSchedule();
        })
    });
}

function saveScheduleIDInKVS(scheduleId) {
    Shelly.call("KVS.Set", { key: CONFIG.KVS_KEY, value: scheduleId });
}

function installSchedule() {
    Shelly.call("Schedule.Create", {
        enable: true,
        timespec: CONFIG.SCHEDULE_TIMESPEC,
        calls: [
            {
                method: "Script.Eval",
                params: {
                    id: 3,
                    code: "installSchedule()"
                },
            }
        ],
    }, function (result) {
        CONFIG.SCHEDULE_ID = result.id;
        console.log("New schedule with ID", CONFIG.SCHEDULE_ID, "installed.");
        saveScheduleIDInKVS(result.id);
    }
    );
}

register();