let command = "off";

if (command === "on"){
  Shelly.call("Switch.Set", {'id': 0, 'on': true});
} else if (command === "off") {
  Shelly.call("Switch.Set", {'id': 0, 'on': false});
} else {
  console.log("Invalid Operation! We are supporting just on and off commands!");
}