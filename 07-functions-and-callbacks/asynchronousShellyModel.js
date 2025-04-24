console.log("Before Shelly.call() execution.");

Shelly.call("Switch.GetStatus", {"id": 0}, function(result) {
  let voltage = result.voltage;
  console.log("Voltage is:", voltage);
});

console.log("After Shelly.call() execution.");

// Synchronous example
// Before Shelly.call() execution.
// Voltage is: 226.1
// After Shelly.call() execution.

// Asynchronous example
// Before Shelly.call() execution.
// After Shelly.call() execution.
// Voltage is: 226.1