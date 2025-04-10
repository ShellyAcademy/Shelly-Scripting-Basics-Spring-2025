Shelly.call("Switch.GetStatus", { "id": 0 }, function (result) {
    let voltage = result.voltage;
    console.log("Voltage coming from the device is:", voltage, "V");
    if (voltage >= 240) {
        console.log("High voltage!");
    } else {
        console.log("Normal voltage!");
    }
});
