function bedroomActivities(buttonPresses) {
    let message;
    switch (buttonPresses) {
        case "single_push": message = "Turn On All Lights!"; break;
        case "double_push": message = "Morning Mode: Open all blinds and play favourite music!"; break;
        case "triple_push": message = "Sunday Mode: Set the alarm to 2 hours later than ordinary and turn on the coffee machine!"; break;
        case "long_push": message = "Turn Off All Lights!"; break;
    }
    return message;
}

function livingRoomActivities(buttonPresses) {
    let message;
    switch (buttonPresses) {
        case "single_push": message = "Turning On All Lights!"; break;
        case "double_push": message = "Meditation Mode: Set room lights brigtness to 20%, change their color to green and start slow music!"; break;
        case "triple_push": message = "Theatre Mode: Turn off all lights, blinds and sounds. Connecting audio system to the TV!"; break;
        case "long_push": message = "Turn Off All Lights!"; break;
    }
    return message;
}

Shelly.addEventHandler(function (data) {
    if (data.component === "button:200") {
        let eventType = data.info.event;
        let selectedRoom = Shelly.getComponentStatus("enum:200").value;
        let message = selectedRoom + " - ";
        switch (selectedRoom) {
            case "living_room": message += livingRoomActivities(eventType); break;
            case "bedroom": message += bedroomActivities(eventType); break;
        }

        console.log(message);
    }
})