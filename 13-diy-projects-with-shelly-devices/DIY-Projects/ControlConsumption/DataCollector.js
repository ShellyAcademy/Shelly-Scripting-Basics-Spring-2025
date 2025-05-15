Timer.set(10000, true, function () {
    // Shelly 2PM 
    Shelly.call("HTTP.Get", { url: "http://192.168.10.105/rpc/Switch.GetStatus?id=1" }, function (result) {
        Shelly.call("Number.Set", { id: 200, value: JSON.parse(result.body).apower });
    });

    // Shelly 1PM 
    Shelly.call("HTTP.Get", { url: "http://192.168.10.245/rpc/Switch.GetStatus?id=0" }, function (result) {
        Shelly.call("Number.Set", { id: 201, value: JSON.parse(result.body).apower });
    });

    // Shelly 1PM Mini
    Shelly.call("HTTP.Get", { url: "http://192.168.10.216/rpc/Switch.GetStatus?id=0" }, function (result) {
        Shelly.call("Number.Set", { id: 203, value: JSON.parse(result.body).apower });
    });
})