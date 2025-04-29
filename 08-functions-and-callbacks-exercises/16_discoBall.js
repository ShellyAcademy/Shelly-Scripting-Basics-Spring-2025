function changeBrightnessAndColor(red, green, blue, brightness) {
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

function startShellyDiscoMode() {
  Timer.set(500, true, function() {
    let red = Math.round(Math.random() * 100);
    let green = Math.round(Math.random() * 100);
    let blue = Math.round(Math.random() * 100);
    changeBrightnessAndColor(red, green, blue, 100);
  });
}

startShellyDiscoMode();