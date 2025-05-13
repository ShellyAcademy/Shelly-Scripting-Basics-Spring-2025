let secondsToTurnOffDeviceIfItIsIdle = 10;

let timerHandler = undefined;

Shelly.addStatusHandler(function (data) {
    let currentSwitchStatus = Shelly.getComponentStatus("switch:0").output;
    if (currentSwitchStatus === true && data.component == "switch:0") {
        if ((data.delta.hasOwnProperty("apower") && data.delta.apower == 0) || (data.delta.hasOwnProperty("current") && data.delta.current == 0)) {
            if (timerHandler === undefined) {
                timerHandler = Timer.set(1000 * secondsToTurnOffDeviceIfItIsIdle, false, timerCode);
                console.log("Device is NOT in use! Created new timer!");
            }
        } else if (timerHandler != undefined && !data.delta.hasOwnProperty("aenergy")) {
            console.log("Device is in use, Timer is deleted!");
            console.log(JSON.stringify(data));
            Timer.clear(timerHandler);
            timerHandler = undefined;
        }
    }

})

function timerCode() {
    console.log("Device is idle for", secondsToTurnOffDeviceIfItIsIdle, "seconds! Turned OFF!");
    timerHandler = undefined;
    Shelly.call("Switch.Set", { "id": 0, "on": false });
}