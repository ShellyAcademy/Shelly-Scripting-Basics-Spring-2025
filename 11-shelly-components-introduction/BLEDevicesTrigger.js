function buttonClicked() {
    console.log("Button Clicked!");
}

function motionTriggered() {
    console.log("Motion Triggered!");
}

function doorWindowTriggered() {
    console.log("Door&Window Triggered!");
}

Shelly.addEventHandler(function (event) {
    if (event.info.event === "shelly-blu") {
        let addr = event.info.data.address;
        // Button -> 38:39:8f:98:34:a1
        if (addr == "38:39:8f:98:34:a1") {
            buttonClicked();
        }
        // Door&Window -> e8:e0:7e:bf:21:39
        if (addr == "e8:e0:7e:bf:21:39") {
            doorWindowTriggered();
        }
        // Motion -> 38:39:8f:a5:9d:19
        if (addr == "38:39:8f:a5:9d:19") {
            motionTriggered();
        }
    }
});