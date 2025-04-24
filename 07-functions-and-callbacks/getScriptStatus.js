function getScriptStatus(number) {
    Shelly.call("Script.GetStatus", {"id": number}, function(result) {
      let scriptRunning = result.running;
      let scriptId = result.id;
      console.log("The scripts", scriptId, "is running:", scriptRunning);
    });
  }

getScriptStatus(1);