Shelly.call("Switch.GetStatus", { "id": 0 }, function (result) {
    let plugVoltage = result.voltage;
    console.log("Current output voltage:", plugVoltage, "V (volts)");

    let kiloVolts = plugVoltage * 0.001;
    console.log("Current ouput voltage:", kiloVolts, "kV (kilovolts)");

    let totalConsumption = result.aenergy.total;
    console.log("Total device consumption:", totalConsumption, "Wh");

});