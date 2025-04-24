function getShellyTemperature() {
    Shelly.call("Switch.GetStatus", {"id": 0}, function(result) {
      let tempC = result.temperature.tC;
      let tempF = result.temperature.tF;
      
      console.log("The temperature in Celsius:", tempC);
      console.log("The temperature in Fahrenheit:", tempF);
    });
  }
  
  getShellyTemperature();