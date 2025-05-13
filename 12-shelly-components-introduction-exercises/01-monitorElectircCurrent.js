let THRESHOLD = 4;

Shelly.addStatusHandler(function (statusData) {
    let componentType = statusData.component;
    let name = statusData.name;
    if (componentType === "switch:0" && name === "switch" && statusData.delta != undefined) {
        let currentUsage = statusData.delta.apower;
        if (currentUsage > THRESHOLD) {
            Shelly.call("Switch.Set", { id: 0, on: false });
        }
    }
})