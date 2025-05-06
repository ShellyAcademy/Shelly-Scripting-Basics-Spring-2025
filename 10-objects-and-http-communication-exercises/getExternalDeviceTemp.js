Shelly.call("HTTP.GET", {url: "http://192.168.10.176/rpc/Switch.GetStatus?id=0"}, function(response){
    let responseObj = JSON.parse(response.body);
    let externalDeviceTemp = responseObj.temperature.tC;
    let currentDeviceTemp = Shelly.getComponentStatus("switch:0").temperature.tC;
    console.log("Current device temp is -", currentDeviceTemp);
    console.log("External device temp is -", externalDeviceTemp);
  })