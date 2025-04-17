// let input = ["Shelly Dimmer Gen3", "Shelly Plus RGBw", "Shelly 1PM Mini Gen4", "Stop"];
// let input = ["Shelly Dimmer Gen3", "Stop", "Shelly Plus RGBw", "Shelly 1PM Mini Gen4"];
let input = ["Shelly Dimmer Gen3", "Shelly Plus RGBw", "Shelly 1PM Mini Gen4"];
let index = 0;
let str = input[index];
while (str !== "Stop" && index < input.length) {
  console.log(str);
  index++;
  str = input[index];
}