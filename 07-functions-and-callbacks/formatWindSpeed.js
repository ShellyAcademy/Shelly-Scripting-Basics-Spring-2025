function windSpeed(speed) {
    let speedType = "unknown";

    if (speed <= 1) {
        speedType = "Calm";
    } else if (speed <= 11) {
        speedType = "Light";
    } else if (speed <= 19) {
        speedType = "Gentle";
    } else {
        speedType = "Extreme";
    }
    console.log(speedType, "-", speed, "km/h");
}

windSpeed(20);