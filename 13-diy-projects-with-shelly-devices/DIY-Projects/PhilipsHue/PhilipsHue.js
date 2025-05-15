let CONFIG = {
    HUE_BRIGDE_IP: "", // YOUR BRIGDE IP
    HUE_USER: "", // YOUR HUE USER
    HUE_BUTTON_VC: 200,
    HUE_LIGHTS: [1, 3]
}

function turnLights(on) {
    for (let hueLight of CONFIG.HUE_LIGHTS) {
        let url = "http://" + CONFIG.HUE_BRIGDE_IP + "/api/" + CONFIG.HUE_USER + "/lights/" + hueLight + "/state/";
        console.log(url);
   
        let body = {
            on: on
        };

        Shelly.call("HTTP.Request", {
            url: url,
            method: "PUT",
            body: body
        });
    }
}

Shelly.addEventHandler(function (eventData) {
    if (typeof eventData.info.event !== undefined && eventData.info.event == "shelly-blu") {
        // console.log(JSON.stringify(eventData));
        if (eventData.info.data.address === "38:39:8f:98:34:a1") {
            // console.log(JSON.stringify(eventData));
            if (typeof eventData.info.data.button !== undefined && eventData.info.data.button === 1) {
                turnLights(true);
            } else if (typeof eventData.info.data.button !== undefined && eventData.info.data.button === 2) {
                turnLights(false);
            }
        }
    } else if (typeof eventData.info.event !== undefined) {
        if (eventData.info.event === "single_push") {
            turnLights(true);
        } else if (eventData.info.event === "double_push") {
            turnLights(false);
        }
    }
})