let refreshPeriodInMinutes = 1;

let location = Shelly.getComponentConfig("sys").location;
let lat = location.lat;
let lon = location.lon;
let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=wind_speed_10m";

function getWeatherSpeed(){
  Shelly.call("HTTP.GET", {url: url}, function(response){
      let responseObj = JSON.parse(response.body);
      let windSpeed = responseObj.current.wind_speed_10m;
      Shelly.call("Number.Set", {id: 200, value: windSpeed});
    })
}

Timer.set(10_000, true, getWeatherSpeed);

//////// SECOND SCRIPT (THE CONSUMER)

Shelly.addStatusHandler(function(data){
  if (data.component == "number:200") {
    let windSpeed = data.delta.value;
    
    if (windSpeed < 25) {
      console.log("Light Wind Speed, no need to take any action!");
    } else if (windSpeed >= 25 && windSpeed < 40) {
      console.log("Wind Speed is increasing! Prepare yourself to take an action!");
    } else {
      console.log("Extreme Conditions! Please take an action!");
    }
  }
})