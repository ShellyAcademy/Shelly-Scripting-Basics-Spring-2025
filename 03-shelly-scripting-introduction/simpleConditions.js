let watts = 3750;
// let watts = 2000;
// let watts = 2700;

if (watts > 3500) {
  // condition is met
  console.log("Extreme Danger!");
} else if (watts > 2500) {
  console.log("Danger!")
} else {
  // condition is not met
  console.log("Safe!");
}

// always executed
console.log("Script continues");