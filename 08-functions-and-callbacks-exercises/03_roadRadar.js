function calcSpeedLimit(area) {
    let speedLimit = 0;
    
    switch (area) {
      case "city":
        speedLimit = 50;
        break;
      case "residential":
        speedLimit = 20;
        break;
      case "motorway":
        speedLimit = 130;
        break;
      case "interstate":
        speedLimit = 90;
        break;
      default: break;
    }
    
    return speedLimit;
  }
  
  function calcDrivingStatus(difference) {
    let status = "";
    
    if (difference <= 20){
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding"
    } else {
      status = "reckless driving"
    }
    
    return status;
  }
  
  function roadRadar(speed, area) {
    let result = "";
    
    let speedLimit = calcSpeedLimit(area);
    
    if (speed <= speedLimit && speed > 0){
      result = "Driving " + speed + "km/h in a " + speedLimit + " zone";
    } else {
      let difference = speed - speedLimit;
      let status = calcDrivingStatus(difference);
      result = "The speed is " + difference + "km/h faster than the allowed speed of " + speedLimit + " - " + status;
    }
    console.log(result);
  }
  
  roadRadar(200, "motorway");