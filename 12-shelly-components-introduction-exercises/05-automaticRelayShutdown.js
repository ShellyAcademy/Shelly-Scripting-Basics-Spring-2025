let timeToTurnOffDeviceAfterUsage = 5;
let deviceIPAddress = "192.168.10.176";

Shelly.addStatusHandler(function(data) {
  if (data.name === "switch" && data.delta.hasOwnProperty("output") && data.delta.output === true) {
    console.log("Timer starts and after", timeToTurnOffDeviceAfterUsage, "seconds will be toggled!");
    let url = "http://" + deviceIPAddress  + "/relay/0?turn=on&timer=" + timeToTurnOffDeviceAfterUsage;
    Shelly.call("HTTP.GET", {url: url});
  }
})