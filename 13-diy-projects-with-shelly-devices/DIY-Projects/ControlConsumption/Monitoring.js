let CONFIG = {
    MAX_THRESHOLD: 10
};

Shelly.addStatusHandler(function (status) {
    if (typeof status.component !== undefined && status.component === "switch:0") {
        let apower = status.delta.apower;

        if (apower >= CONFIG.MAX_THRESHOLD) {
            // Get all consumption values
            let shelly2PMConsumption = Shelly.getComponentStatus("number:200").value;
            let shelly1PMConsumption = Shelly.getComponentStatus("number:201").value;
            let shelly1PMMiniConsumption = Shelly.getComponentStatus("number:203").value;

            // Log all consumption values
            console.log("Shelly 2PM Consumption:", shelly2PMConsumption);
            console.log("Shelly 1PM Consumption:", shelly1PMConsumption);
            console.log("Shelly 1PM Mini Consumption:", shelly1PMMiniConsumption);

            // compare values to find the maximum using Math.max
            let maxConsumption = Math.max(shelly2PMConsumption, shelly1PMConsumption, shelly1PMMiniConsumption);
            let booleanID;

            if (maxConsumption === shelly2PMConsumption) {
                booleanID = 200;
            } else if (maxConsumption === shelly1PMConsumption) {
                booleanID = 201;
            } else if (maxConsumption === shelly1PMMiniConsumption) {
                booleanID = 202;
            }

            Shelly.call("Boolean.Set", { id: booleanID, value: false }, function (result) {
                console.log(result);
            })
        }
    }
})