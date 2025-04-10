let command = "start"; // start or stop
// let command = "other";

switch (command) {
  case "start":
    console.log("starting");
    break;
  case "stop":
    console.log("stopping");
    break;
  default:
    console.log("default");    
}

if (command === "start") {
  console.log("starting");
} else if (command === "stop") {
  console.log("stopping");
} else {
  console.log("default");
}