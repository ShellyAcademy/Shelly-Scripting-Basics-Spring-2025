Timer.set(
    /* every 10 seconds */ 10000,
    /* repeat */ false,
    /* callback */ function () {
        let date = Date();
        let hour = date.getHours();

        console.log("Current hour is: ", hour);
        if (hour >= 18 || hour <= 8) {
            Shelly.call("Switch.Set", { "id": 0, "on": false });
        } else {
            Shelly.call("Switch.Set", { "id": 0, "on": true });
        }
    }
)