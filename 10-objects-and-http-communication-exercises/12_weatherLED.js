function setAnyColor(colorAsRGB){
    let config = {
      "config": {
          "leds": {
              "colors": {
                  "switch:0": {
                      "on": {
                          "rgb": colorAsRGB,
                          "brightness": 100
                      }
                  }
              }
          }
      }
  }
  
  Shelly.call("PLUGS_UI.SetConfig", config);
  }
  
  function setGreenColor(){
    setAnyColor([0, 100, 0]);
  }
  
  function setRedColor(){
    setAnyColor([100 ,0 , 0]);
  }
  
  function setBlueColor(){
    setAnyColor([0, 0, 100]);
  }
  
  function changeLEDColorByTemp(response){
    let parsedResponse = JSON.parse(response.body);
    let tempOutside = parsedResponse.current.temperature_2m;
    
    if (tempOutside <= 5){
      setBlueColor();
      console.log("The weather is cold outside!");
    } else if (tempOutside < 25){
      setGreenColor();
      console.log("The weather is nice outside!");
    } else{
      setRedColor();
      console.log("The weather is hot outside!");
    }
    
    console.log("It is", Math.round(tempOutside), "degree celsius!");
  }
  
  let url = "https://api.open-meteo.com/v1/forecast?latitude=42.6975&longitude=23.3241&current=temperature_2m&tzid=Europe/Sofia";
  Shelly.call("HTTP.GET", {url: url}, changeLEDColorByTemp);