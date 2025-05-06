function sunriseSunset(response){
    let parsedResponse = JSON.parse(response.body);
    let sunrise = parsedResponse.results.sunrise;
    let sunset = parsedResponse.results.sunset;
    
    console.log("The sunrise time is", sunrise);
    console.log("The sunset time is", sunset);
  }
  
  let url = "https://api.sunrise-sunset.org/json?lat=42.698334&lng=23.319941&tzid=Europe/Sofia&formatted=0";
  Shelly.call("HTTP.GET", {url: url}, sunriseSunset);