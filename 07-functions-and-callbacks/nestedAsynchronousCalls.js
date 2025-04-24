// Better use getComponentStatus, getComponentConfig if possible
Shelly.call("Sys.GetStatus", {}, function (result) {
    // let hour = Number(result.time.slice(0, 2));
    let hour = Number(result.time);
    // console.log(typeof hour);
    // console.log("Hour:", hour);\

    if (hour >= 20) {
        Shelly.call("Switch.GetStatus", { "id": 0 }, function (result) {
            console.log(result);
        });
    }
});