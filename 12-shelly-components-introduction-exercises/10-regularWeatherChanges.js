let url = "https://api.open-meteo.com/v1/forecast?latitude=42.6975&longitude=23.3241&current=temperature_2m,wind_speed_10m&timezone=auto";
let timerInvokeInMinutes = 1;

function callVC(componentType, id, value){
  let requestComponent = componentType + ".Set";
  Shelly.call(requestComponent, {id: id, value: value});
}

Timer.set(1000, true, function () {
    Shelly.call("HTTP.GET", { url: url }, function (response) {
        let parsedObj = JSON.parse(response.body);
        let windSpeed = parsedObj.current.wind_speed_10m;
        let temp = parsedObj.current.temperature_2m;
        let savedWindSpeed = Shelly.getComponentStatus("number:200").value;
        callVC("Number", 201, temp);
        if (savedWindSpeed != windSpeed){
          callVC("Number", 200, windSpeed);
        }
    })
})