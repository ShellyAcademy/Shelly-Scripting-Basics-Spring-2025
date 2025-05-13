Shelly.addStatusHandler(function(data){
  if (data.component === "number:200") {
    let brightness = data.delta.value;
    let url = "http://192.168.10.161/rpc/RGB.Set?id=0&brightness=" + brightness;
    Shelly.call("HTTP.GET", {url: url});
  }
})