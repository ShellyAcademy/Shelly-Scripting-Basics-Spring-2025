Shelly.addEventHandler(function(event) {
    console.log(JSON.stringify(event));
    if (event.info.event && event.info.component) {
      if (event.info.event === "toggle" && event.info.component === "switch:0") {     
        let state = event.info.state;
        // Second switch opposite state
        // let url = "http://192.168.10.127/rpc/Switch.Set?id=0&on=" + !state;
        
        // Second switch same state
        let url = "http://192.168.10.127/rpc/Switch.Set";
        
        Shelly.call("HTTP.Get", {"url": url}, function(result, error_code, error_message) {
          let resultData = JSON.parse(result.body);
          if (resultData.code) {
            console.log("Error:", resultData.message);
          } else {
            console.log("Device toggled.");
          }
        })
      }
    }
  });