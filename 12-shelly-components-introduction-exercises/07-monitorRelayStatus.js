function setVCiSInUse(valueToSet) {
  Shelly.call("Boolean.Set", {"id": 200, "value": valueToSet});
}

Shelly.addStatusHandler(function(data){
  if (data.name === "switch") {
    let currentUsage = 0;
    if (data.delta.hasOwnProperty("aenergy")) {
      currentUsage = data.delta.aenergy.by_minute[0];
    } else if (data.delta.hasOwnProperty("current")) {
      currentUsage = data.delta.current;
    }
    
    if (currentUsage != undefined && currentUsage > 0) {
      setVCiSInUse(true);
    } else if (currentUsage != undefined && currentUsage == 0) {
      setVCiSInUse(false);
    }
  }
});