// Get voltage data from Shelly device dynamically
Shelly.call("Switch.GetStatus", {"id": 0}, function(result) {
    let voltage = result.voltage;
    console.log("Voltage is:", voltage, "V");
    let highVoltage = voltage > 240;
    console.log("Voltage > 240 V:", highVoltage);
  });
  
  // Hardcoded value
  let voltage = 220;
  console.log(voltage > 240);