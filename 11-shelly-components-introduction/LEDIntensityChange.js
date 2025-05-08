function changeLEDColors(red, green, blue, brightness) {
    let config = {
        "config": {
          "leds": {
            "colors": {
              "switch:0": {
                "on": {
                  "rgb": [red, green, blue],
                  "brightness": brightness
                }
              }
            }
          }
        }
      }
    
    Shelly.call("PLUGS_UI.SetConfig", config);
}

function changeLED() {
  Shelly.call("Switch.GetStatus", {id: 0}, function(result) {
    let consumption = result.aenergy.total;
    // let consumption = 155;
    console.log("Consumption:", consumption);
    if (consumption >= 100) {
      changeLEDColors(100, 0, 0, 100);
    } else if (consumption >= 50) {
      changeLEDColors(0, 100, 0, 100);
    } else if (consumption >= 10) {
      changeLEDColors(0, 0, 100, 100);
    }
  });
}

changeLED();