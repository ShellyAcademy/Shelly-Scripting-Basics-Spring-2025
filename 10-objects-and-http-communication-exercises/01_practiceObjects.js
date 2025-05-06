let obj = {
    name: "1PM Mini Gen4",
    printName: function(){
      console.log("The device name is", this.name, "!");
    }
  }
  
  //console.log(obj);
  
  obj.name = "1PM Mini Gen4 NEW";
  
  obj.ipAddress = "http://192.168.10.176";
  
  console.log(JSON.stringify(obj));
  
  //delete obj.ipAddress;
  
  //console.log(JSON.stringify(obj));
  
  console.log(obj.name);
  
  obj.printNameWithAddress = function(){
    console.log("The device name is", this.name, "with IP address", this.ipAddress);
  }
  
  obj.printNameWithAddress();