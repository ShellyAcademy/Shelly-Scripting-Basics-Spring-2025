let timerCounter = 0;
let timesToRepeatTimer = 3;

function timerFunction() {
    console.log("Running timer multiple times.");
    timerCounter++;

    // Check if timer has repeated 2 times and change timer value
    if (timerCounter === timesToRepeatTimer) {
        Timer.clear(timerHandler);
        timerHandler = Timer.set(1000, true, timerFunction);
    }
}

let timerHandler = Timer.set(
    3000,
    true,
    timerFunction
)