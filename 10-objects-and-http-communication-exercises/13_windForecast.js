function windForecast(response){
    let parsedResponse = JSON.parse(response.body);
    let dateArr = parsedResponse.daily.time;
    let windArr = parsedResponse.daily.wind_speed_10m_max;
    
    let condition = "";
    
    for (let i = 0; i < dateArr.length; i++){
      let windSpeed = windArr[i];
      let date = dateArr[i];
      
      if (windSpeed >= 20) {
        condition = "(Close the awnings!)";
      } else {
        condition = "";
      }
      
      console.log("Date:", date, "- Wind Speed:", windSpeed, "km/h", condition);
    }
    
  }
  
  let url = "https://api.open-meteo.com/v1/forecast?latitude=42.6975&longitude=23.3241&daily=wind_speed_10m_max";
  Shelly.call("HTTP.GET", {url: url}, windForecast);