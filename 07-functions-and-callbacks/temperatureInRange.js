function temperatureInRange(temperature) {
    let result = "";
    if (temperature >= 16 && temperature <= 43) {
        result = "Yes";
    } else {
        result = "No";
    }
    return result;
}

console.log(temperatureInRange(37));