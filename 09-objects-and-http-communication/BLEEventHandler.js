let remoteDeviceUrl = "http://<REMOTE_DEVICE_IP>/rpc/Switch.Toggle?id=0";

Shelly.addEventHandler(function (event) {
    if (event.info.event === "shelly-blu" && event.info.data.address == "38:39:8f:98:34:a1") {
        console.log(event.info);
        let battery = event.info.data.battery;
        console.log("Battery is:", battery, "%");
        Shelly.call("Switch.Toggle", { id: 0 });
        Shelly.call("HTTP.GET", { url: remoteDeviceUrl });
    }
})