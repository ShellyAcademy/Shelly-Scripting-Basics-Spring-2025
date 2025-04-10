Shelly.call("Switch.GetStatus", { "id": 0 }, function (result) {
    let consumptionByMinutes = result.aenergy.by_minute;

    let consumptionForCurrentMinute = consumptionByMinutes[0];
    let consumptionForLastMinute = consumptionByMinutes[1];

    if (consumptionForCurrentMinute > consumptionForLastMinute) {
        console.log("Usage is higher than a minute ago!");
    } else {
        console.log("Usage is not higher than a minute ago!");
    }

});