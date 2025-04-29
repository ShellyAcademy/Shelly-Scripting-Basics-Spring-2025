function getScriptStatus(num){
    let result = Shelly.getComponentStatus("script:" + num);
    return [result.running, result.id];
  }
  
  function getScriptsInfo(numberOne, numberTwo) {
    let id = "script:" + numberOne;
    let result = Shelly.getComponentConfig(id);
    let scriptId = result.id;
    let scriptName = result.name;
    let scriptEnable = result.enable;
    console.log("Script ID", scriptId);
    console.log("Script Name", scriptName);
    console.log("Enable:", scriptEnable);
    
    let resultSecond = getScriptStatus(numberTwo);
    console.log("The script", resultSecond[1], "is running:", resultSecond[0]);
  }
  
  getScriptsInfo(1,3);