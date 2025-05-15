let CONFIG = {
    KVS_KEY_TURN_ON: "Turn-ON-Switch-Schedule",
    KVS_KEY_TURN_OFF: "Turn-OFF-Switch-Schedule",
};

function updateSchedule(key, on) {
    Shelly.call("KVS.Get", { key: key }, function (result) {
        let scheduleID = result.value;
        if (scheduleID) {
            Shelly.call("Schedule.Update", { id: scheduleID, enable: on });
        }
    });
}

Shelly.addStatusHandler(function (status) {
    if (status.component === "boolean:200") {
        console.log(JSON.stringify(status));
        let value = status.delta.value;
        updateSchedule(CONFIG.KVS_KEY_TURN_ON, value);
        updateSchedule(CONFIG.KVS_KEY_TURN_OFF, value);
    }
});