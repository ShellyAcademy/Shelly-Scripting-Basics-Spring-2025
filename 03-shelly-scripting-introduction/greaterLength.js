let firstName = "Shelly Dimmer";
let secondName = "Shelly Plus";

if (firstName.length > secondName.length) {
  console.log(firstName);
} else if (secondName.length > firstName.length) {
  console.log(secondName);
} else {
  console.log("Names have equal length");
  console.log(firstName);
  console.log(secondName);
}