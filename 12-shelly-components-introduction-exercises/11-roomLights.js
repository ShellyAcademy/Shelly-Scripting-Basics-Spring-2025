let livingRoomDeviceIPs = ["192.168.10.176"];
let bedroomDeviceIPs = ["192.168.10.105", "192.168.10.245"];

function turnOffDevices(ipAddress){
  let id = 0;
  if (ipAddress == "192.168.10.105") {id = 1;}
  let url = "http://" + ipAddress + "/rpc/Switch.Set?id=" + id + "&on=false";
  Shelly.call("HTTP.GET", {url: url});
}

function turnOnDevices(ipAddress){
  let id = 0;
  if (ipAddress == "192.168.10.105") {id = 1;}
  let url = "http://" + ipAddress + "/rpc/Switch.Set?id=" + id + "&on=true";
  console.log(url);
  Shelly.call("HTTP.GET", {url: url});
}

function turnOnLivingRoomDevices(){
  for (let i = 0; i < bedroomDeviceIPs.length; i++) {
    turnOffDevices(bedroomDeviceIPs[i]);
  }
  for (let i = 0; i < livingRoomDeviceIPs.length; i++) {
    turnOnDevices(livingRoomDeviceIPs[i]);
  }
}

function turnOnBedroomDevices(){
  for (let i = 0; i < livingRoomDeviceIPs.length; i++) {
    turnOffDevices(livingRoomDeviceIPs[i]);
  }
  for (let i = 0; i < bedroomDeviceIPs.length; i++) {
    turnOnDevices(bedroomDeviceIPs[i]);
  }
}

Shelly.addStatusHandler(function(data){
  if (data.component === "enum:200"){
    let choosenRoom = data.delta.value;
    console.log(choosenRoom);
    if (choosenRoom == "livingroom"){
      turnOnLivingRoomDevices();
    } else {
      turnOnBedroomDevices();
    }
  }
})