Shelly.call("Switch.Set", {"id": 0, "on": false});

Timer.set(3000, false, function() {
  Shelly.call("Switch.Set", {"id": 0, "on": true});
  console.log("Turning on the device...");
});