console.log("Before Shelly.call() execution.");

// let voltage = result.voltage;
let voltage = Shelly.getComponentStatus("switch:0").voltage;
console.log("Voltage is: ", voltage);

console.log("After Shelly.call() execution.");

// Synchronous example
// Before Shelly.call() execution.
// Voltage is: 226.1
// After Shelly.call() execution.

// Asynchronous example
// Before Shelly.call() execution.
// After Shelly.call() execution.
// Voltage is: 226.1