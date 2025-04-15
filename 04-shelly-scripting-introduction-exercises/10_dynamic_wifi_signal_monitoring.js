Timer.set(10_000, true, function(){
    let wifiSignalParam = Shelly.getComponentStatus("wifi").rssi;
  
    console.log(wifiSignalParam);
    if (wifiSignalParam < -70){
      console.log("Weak Signal!");
    } else {
      console.log("Signal OK");
    }  
  })