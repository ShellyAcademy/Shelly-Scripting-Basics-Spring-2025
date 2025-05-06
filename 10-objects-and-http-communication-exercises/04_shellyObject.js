function shellyObj(input){
    let obj = {
      deviceName: "NOT_PROVIDED",
      init: function(name){
        this.deviceName = name;
      },
      details: function(){
        console.log(this.deviceName, "optimize energy consumption!");
      }
    }
    
    for (let i = 0; i < input.length; i++){
      let currentIterationDeviceName = input[i];
      let deviceObj = Object.create(obj);
      deviceObj.init(currentIterationDeviceName);
      deviceObj.details();
    }
  }
  
  shellyObj(['Shelly Plus 1', 'Shelly Dimmer 2', 'Shelly 1']);