let CONFIG = {
  currentStatus: undefined,
  devices: ["192.168.10.216", "192.168.10.105"]
}

function syncDevices() {
  for (let i = 0; i < CONFIG.devices.length; i++){
    let ipAddress = CONFIG.devices[i];
    let id = 0;
    if (ipAddress == "192.168.10.105") {id = 1}
    let url = "http://" + ipAddress + "/rpc/Switch.Set?id=" + id + "&on=" + CONFIG.currentStatus;
    console.log(url);
    Shelly.call("HTTP.GET", {url: url});
  }
}

Shelly.addStatusHandler(function(data) {
  if (data.name === "switch" && data.delta.output != undefined) {
    CONFIG.currentStatus = data.delta.output;
    console.log("Relay data:", data.delta.output);
    let message = "Empty";
    if (CONFIG.curentStatus) {
      message = "The connected device is working!";
    } else {
      message = "The connected device is NOT working!";
    }
    syncDevices();
    console.log(message);
  }
})