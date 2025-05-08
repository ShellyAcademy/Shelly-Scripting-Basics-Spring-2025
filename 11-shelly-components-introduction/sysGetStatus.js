Shelly.call("Sys.GetStatus", {}, function (result) {
    console.log(JSON.stringify(result));
    console.log("System time:", result.time);
});