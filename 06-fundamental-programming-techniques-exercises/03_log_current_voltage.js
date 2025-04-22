let currentVoltageUsage = shelly.getComponentStatus("switch:0").voltage;
let result = "Shelly switch output voltage " + currentVoltageUsage + " volts";
console.log(result);