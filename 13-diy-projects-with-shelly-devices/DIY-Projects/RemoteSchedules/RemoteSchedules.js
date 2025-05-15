let CONFIG = {
    KVS_KEY_TURN_ON: "Turn-ON-Switch-Schedule",
    KVS_KEY_TURN_OFF: "Turn-OFF-Switch-Schedule",
};

function updateSchedule(deviceIP, kvsKey, on) {
    let urlKvs = "http://" + deviceIP + "/rpc/KVS.Get?key=" + kvsKey;
    Shelly.call("HTTP.Get", { url: urlKvs }, function (result) {
        let response = JSON.parse(result.body);
        let scheduleID = response.value;
        let urlSchedule = "http://" + deviceIP + "/rpc/Schedule.Update?id=" + scheduleID + "&enable=" + on;
        Shelly.call("HTTP.Get", { url: urlSchedule });
    });
}

Shelly.addStatusHandler(function (status) {
    if (status.component === "boolean:200") {
        console.log(JSON.stringify(status));
        let value = status.delta.value;
        Shelly.call("Text.GetStatus", { id: 200 }, function (result) {
            response = JSON.parse(result.value);
            let deviceIPs = response.device_ips;

            for (let deviceIP of deviceIPs) {
                updateSchedule(deviceIP, CONFIG.KVS_KEY_TURN_ON, value);
                updateSchedule(deviceIP, CONFIG.KVS_KEY_TURN_OFF, value);
            }
        });
    }
});