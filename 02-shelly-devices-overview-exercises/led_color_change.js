let config = {
    "config": {
        "leds": {
            "colors": {
                "switch:0": {
                    "on": {
                        "rgb": [100, 0, 0],
                        "brightness": 100
                    }
                }
            }
        }
    }
}

Shelly.call("PLUGS_UI.SetConfig", config);