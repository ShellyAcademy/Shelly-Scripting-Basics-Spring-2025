let timerCounter = 0;

let timerHandler = Timer.set(
    1000,
    true,
    function () {
        timerCounter++;
        console.log("Time elapsed:", timerCounter, "seconds");
        if (timerCounter === 5) {
            Timer.clear(timerHandler);
        }
    }
)