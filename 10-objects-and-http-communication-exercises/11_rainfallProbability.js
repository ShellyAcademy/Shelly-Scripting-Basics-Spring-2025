function rainfall(response){
    let parsedResponse = JSON.parse(response.body);
    let timeArr = parsedResponse.daily.time;
    let precipitationArr = parsedResponse.daily.precipitation_probability_max;
    
    console.log("There is a higher change of precipitation on the following dates: ")
    for (let i = 0; i < timeArr.length; i++){
      let date = timeArr[i];
      let probability = precipitationArr[i];
      if (probability >= 50){
        console.log("Date:", date, "-", "Probability:", probability);
      }
    }
  }
  
  let url = "https://api.open-meteo.com/v1/forecast?latitude=42.6975&longitude=23.3241&daily=precipitation_probability_max";
  Shelly.call("HTTP.GET", {url: url}, rainfall);