function changeBrightness(brightness) {
    let config = {
        "config": {
            "leds": {
                "colors": {
                    "switch:0": {
                        "on": {
                            "brightness": brightness
                        }
                    }
                }
            }
        }
    }
    Shelly.call("PLUGS_UI.SetConfig", config);
}

function dayTimeBrightness(hour) {
  let currentHour = hour;
  console.log(currentHour);
  if (currentHour >= 22) {
    changeBrightness(20);
  } else if (currentHour >= 18) {
    changeBrightness(60);
  } else {
    changeBrightness(100);
  }
}

dayTimeBrightness(23);