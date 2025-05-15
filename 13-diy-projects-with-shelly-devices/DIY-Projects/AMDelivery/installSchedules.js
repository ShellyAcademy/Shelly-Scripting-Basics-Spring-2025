let CONFIG = {
    KVS_KEY_TURN_ON: "Turn-ON-Switch-Schedule",
    KVS_KEY_TURN_OFF: "Turn-OFF-Switch-Schedule",
    TURN_SWITCH_ON_TIMESPEC: "0 0 4 * * *",
    TURN_SWITCH_OFF_TIMESPEC: "30 0 8 * * *",
    SCHEDULE_ID: -1
};

function saveScheduleInKVS(key, value) {
    Shelly.call("KVS.Set", { key: key, value: value });
}

function installSchedule(key, timespec, on) {
    Shelly.call("Schedule.Create", {
        enable: false,
        timespec: timespec,
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
        console.log(result);
        saveScheduleInKVS(key, result.id);
    }
    )
}

installSchedule(CONFIG.KVS_KEY_TURN_ON, CONFIG.TURN_SWITCH_ON_TIMESPEC, true);
installSchedule(CONFIG.KVS_KEY_TURN_OFF, CONFIG.TURN_SWITCH_OFF_TIMESPEC, false);