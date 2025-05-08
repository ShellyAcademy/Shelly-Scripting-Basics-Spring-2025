Shelly.addStatusHandler(function (status) {
    if (status.component === "number:200") {
        console.log(status);
        let temperature = status.delta.value;
        if (temperature > 15) {
            console.log("Turning off the Heater.");
            Shelly.call("Switch.Set", { id: 0, on: false });
        } else if (temperature < 0) {
            console.log("Turning on the Heater.");
            Shelly.call("Switch.Set", { id: 0, on: true });
        }
    }
});