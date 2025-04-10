let config = {
    "config": {
      "leds": {
        "colors": {
          "switch:0": {
            "on": {
              "rgb": [30, 60, 20],
              "brightness": 100
            }
          }
        }
      }
    }
  }
Shelly.call("PLUGS_UI.SetConfig", config);