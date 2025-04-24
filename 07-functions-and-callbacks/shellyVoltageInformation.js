function getVoltageInfo() {
    Shelly.call("Switch.GetConfig", { "id": 0 }, function (result) {
        let powerLimit = result.power_limit;
        let voltageLimit = result.voltage_limit;
        console.log("Power Limit:", powerLimit, "Watts");
        console.log("Voltage Limit:", voltageLimit, "Volts");
    });
}

getVoltageInfo();