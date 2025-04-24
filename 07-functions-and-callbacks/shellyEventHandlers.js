function stopTimer(timer) {
    console.log("Stopping timer...", timer);
}

function startTimer(timer) {
    console.log("Starting timer...", timer);
}

Shelly.addEventHandler(function (event) {
    // console.log(JSON.stringify(event));
    if (event.info.event) {
        if (event.info.event === "RESET_TIMER") {
            let timer = event.info.data.timer
            stopTimer(timer);
            startTimer(timer);
            console.log("Timer was reset.");
        }
    }
});