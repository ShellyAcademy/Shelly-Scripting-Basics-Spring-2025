// first way
let device = {name: 'Shelly', number: 1, color: 'white', 'switch:0': true};
// This is wrong when having special characters - ":"
// console.log("Is Switch turned on?", device.switch:0);

// This is correct when having special characters - ":"
console.log("Is Switch turned on?", device['switch:0']);

// console.log(device.name);

// let device = {};
// device.name = 'Shelly'
// device.number = 1;
// device.color = 'white';

// console.log(device.name);
// console.log(device['name']);