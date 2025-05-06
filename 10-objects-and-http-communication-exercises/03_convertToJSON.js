function convertToString(manufacturer, model, color){
    let deviceObj = {
      color: color,
      description: model,
      name: manufacturer
    };
    
    return deviceObj;
  }
  
  let createAnObjectString = convertToString('Shelly', 'Wall Switch 2', 'white');
  console.log(JSON.stringify(createAnObjectString));