let WiFiConfig = {
  sta: {
    ssid: "Shelly-WiFi-Backup",
    pass: "22222222",
    enable: true,
  },
};

Timer.set(60000, true, function () {
  Shelly.call(
    "HTTP.Get",
    { url: "http://192.168.10.152:3000/slow-endpoint" },
    function (result, error_code, error_message) {
      console.log(error_code);
      console.log(error_message);
      if (error_code === -104 && error_message === "-104: Timed out") {
        Shelly.call("WiFi.SetConfig", { config: WiFiConfig });
      }
    }
  );
});
