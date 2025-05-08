function changeLEDMode() {
    let config = {
        "config": {
          "leds": {
            "mode": "switch"
          }
        }
      }
      Shelly.call("PLUGS_UI.SetConfig", config);
}

changeLEDMode();