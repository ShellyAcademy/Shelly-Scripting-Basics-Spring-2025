function createScript(scriptName){
    Shelly.call("Script.Create", {'name': scriptName}, function(result){
      let scriptId = result.id;
      console.log("My new script id is:", scriptId);
    });
  }
  
  //createScript("NewScriptFromScript");
  
  function deleteScript(id) {
    Shelly.call("Script.Delete", {'id': id});
  }
  
  deleteScript(4);