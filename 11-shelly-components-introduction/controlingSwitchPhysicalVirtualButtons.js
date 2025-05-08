Shelly.addEventHandler(function (event) {
    // Filter by event name
    if (typeof event.info.event !== undefined && event.info.event == "shelly-blu") {
        console.log(JSON.stringify(event));
        let addressBTN = event.info.data.address;
        // Filter by device address, we are interested only in Button
        if (addressBTN === "38:39:8f:98:34:a1") {
            Shelly.call("Switch.Set", { id: 0, on: true });
        }
    } else if (typeof event.info.component !== undefined && event.info.component == "button:200") {
        Shelly.call("Switch.Set", { id: 0, on: false });
    }
})