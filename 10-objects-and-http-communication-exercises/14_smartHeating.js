function smartHeating(response){
    let parsedResponse = JSON.parse(response.body);
    let dateArr = parsedResponse.hourly.time;
    let temps = parsedResponse.hourly.temperature_2m;
    let message = "";
    
    for (let i = 0; i < dateArr.length; i+=3){
      let temp = temps[i];
      let date = dateArr[i];
      
      if (temp <= 16){
        message = "Shelly, turn the heating ON!";
      } else {
        message = "Shelly, turn the heating OFF!"
      }
      
      console.log("Date:", date, "– Temperature:", temp, "°C (", message, ")");
    }
  }
  
  let url = "https://api.open-meteo.com/v1/forecast?latitude=42.6975&longitude=23.3241&hourly=temperature_2m&forecast_days=1";
  Shelly.call("HTTP.GET", {url: url}, smartHeating);