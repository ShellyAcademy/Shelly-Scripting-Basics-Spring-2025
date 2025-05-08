Shelly.call("Shelly.GetConfig", {}, function (result) {
    console.log(JSON.stringify(result));
});