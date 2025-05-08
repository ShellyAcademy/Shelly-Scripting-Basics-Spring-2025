function makeHTTPRequest(lat, lon) {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m";
    console.log("API url:", url);

    Shelly.call("HTTP.Get", { url: url }, function (result) {
        let result = JSON.parse(result.body);
        let temp = result.current.temperature_2m;
        console.log("Temperature for last 2 minutes is:", temp);
    });
}

Shelly.call("Shelly.DetectLocation", {}, function (result) {
    let lat = result.lat;
    let lon = result.lon;
    makeHTTPRequest(lat, lon);
});