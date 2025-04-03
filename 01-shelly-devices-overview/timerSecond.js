Timer.set(4000, true, function () {
    Shelly.call("Switch.Toggle", { "id": 0 });
});