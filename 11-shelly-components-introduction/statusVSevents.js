Shelly.addStatusHandler(function(status) {
  // console.log(status);
  if (status.component == "button:200") {
    console.log("Button Status Change");
    console.log(JSON.stringify(status));
  }
  
  if (status.component == "boolean:200") {
    console.log("Boolean Status Change");
    console.log(JSON.stringify(status));
  }
});

Shelly.addEventHandler(function(event) {
  // console.log(event);
  if (event.info.component == "button:200") {
    console.log("Button Event triggered!");
    console.log(JSON.stringify(event));
  }
});