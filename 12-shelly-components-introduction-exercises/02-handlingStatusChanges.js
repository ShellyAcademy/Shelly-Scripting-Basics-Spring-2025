Shelly.addStatusHandler(function(data){
  if (data.name === "switch" && data.delta.output != undefined) {
    let isOn = data.delta.output;
    let message = "NOT PROVIDED DATA";
    
    if (isOn) {
      message = "The device is working!";
    } else {
      message = "The device is NOT working!";
    }
    
    console.log(message);
   
  }
})