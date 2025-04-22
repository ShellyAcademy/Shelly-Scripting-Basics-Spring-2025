let input = [120, 45.55, -150];
let sumOfVoltages = 0;

for (let i = 0; i < input.length; i++){
  let currentElement = input[i];
  
  if (currentElement === "NoMorePower") {
    break;
  } else if (currentElement < 0) {
    console.log("Invalid operator!");
    break;
  }
  
  sumOfVoltages += currentElement;
  console.log("Increase:", currentElement);
}

console.log("Total", sumOfVoltages)