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
}