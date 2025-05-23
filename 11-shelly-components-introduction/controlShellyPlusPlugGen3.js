const MIN_THRESHOLD = 0;
const MAX_THRESHOLD = 22;
const SHELLY_PLUG_IP = "192.168.10.127";

function sendHTTPRequest() {
    let url = "http://" + SHELLY_PLUG_IP + "/rpc/Switch.Toggle?id=0";
    Shelly.call("HTTP.Get", { url: url }, function (result) {
        console.log(result);
    })
}

Shelly.addStatusHandler(function (status) {
    if (status.component === "number:200" && typeof status.delta.value !== undefined) {
        let temperature = status.delta.value;
        if (temperature < MIN_THRESHOLD) {
            sendHTTPRequest();
        } else if (temperature > MAX_THRESHOLD) {
            sendHTTPRequest();
        }
    }
});