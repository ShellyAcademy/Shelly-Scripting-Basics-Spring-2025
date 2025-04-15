let inputVoltage = 57;
let result = "";

if (inputVoltage >= 220){
  result = "High Voltage!";
} else if (inputVoltage <= 50) {
  result = "Low Voltage!";
} else {
  result = "Normal Voltage!";
}

console.log(result);