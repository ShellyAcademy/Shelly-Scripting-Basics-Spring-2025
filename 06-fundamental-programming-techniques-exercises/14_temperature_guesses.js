let input = [31, 15, 43, 67, 41, 25, 42];

let actualDeviceTemp = Shelly.getComponentStatus("switch:0").temperature.tC.toFixed(0);
console.log(actualDeviceTemp);
let result = "Not Found! " + actualDeviceTemp;

for (let i = 0; i < input.length; i++) {
  let guessedTemp = input[i];
  if (guessedTemp == actualDeviceTemp){
    result = "Correct! " + actualDeviceTemp;
    break;
  }
}

console.log(result);