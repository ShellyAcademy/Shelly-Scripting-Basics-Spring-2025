let currentVoltageUsage = Shelly.getComponentStatus("switch:0").voltage;

for (let i = currentVoltageUsage; i >= 1; i--){
  console.log("Current Voltage", i);
}