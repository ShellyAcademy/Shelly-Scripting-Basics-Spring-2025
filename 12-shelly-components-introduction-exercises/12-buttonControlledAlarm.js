let isAlarmOn = false;

function singlePushFunction() {
    let message = "Alarm is already active";

    if (!isAlarmOn) {
        message = "Successfully activated the alarm system!";
        isAlarmOn = true;
    }
    return message;
}

function doublePressFunction() {
    return isAlarmOn ? "Added siren sound to the alarm" : "Please activate the alarm!";
}

function triplePressFunction() {
    return isAlarmOn ? "Added vibrations to the alarm" : "Please activate the alarm!";
}

function longPushFunction() {
    let message = "Alarm is already deactivated!";

    if (isAlarmOn) {
        message = "Successfully deactivated the alarm system!";
        isAlarmOn = false;
    }
    return message;
}

Shelly.addEventHandler(function (data) {
    if (data.component === "button:200") {
        let actionType = data.info.event;
        let message;

        switch (actionType) {
            case "single_push": message = singlePushFunction(); break;
            case "double_push": message = doublePressFunction(); break;
            case "triple_push": message = triplePressFunction(); break;
            case "long_push": message = longPushFunction(); break;
        }
        console.log(message);
    }
})