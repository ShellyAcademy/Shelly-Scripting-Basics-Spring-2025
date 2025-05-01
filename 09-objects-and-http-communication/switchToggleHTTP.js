let url = "http://<REMOTE_DEVICE_IP>/rpc/Switch.Toggle?id=0";

Shelly.call("HTTP.GET", { url: url }, function (result) {
    console.log(result);
})