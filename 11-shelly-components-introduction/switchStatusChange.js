Shelly.addStatusHandler(function(eventData) {
    // console.log(eventData);
    if (eventData.component === "switch:0") {
      // console.log(JSON.stringify(eventData));
      console.log("Status change in Switch:0");
      if (eventData.delta.output === true) {
        console.log("Switch:0 turned on");
      }
      
      if (eventData.delta.output === false) {
        console.log("Switch:0 turned off");
      } else {
        console.log("Some other status of the switch:0 changed");
      }
    }
  })