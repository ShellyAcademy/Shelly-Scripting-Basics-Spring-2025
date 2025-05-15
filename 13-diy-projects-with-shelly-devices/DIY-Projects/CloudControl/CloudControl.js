let CONFIG = {
    TURN_ON_SCENE_ID: "", // SCENE ID
    SERVER: "", // SERVER
    AUTH_KEY: "" // YOUR AUTH_KEY
};

let url = CONFIG.SERVER + "/scene/manual_run/?auth_key=" + CONFIG.AUTH_KEY;

let sceneID = CONFIG.TURN_ON_SCENE_ID;
let body = "id=" + sceneID;

Shelly.call("HTTP.Request", {
    method: "POST",
    url: url,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body,
}, function (result, error_code, error_message) {
    if (error_code === 0) {
        console.log("Successfully triggered scene. Result is:", result.body);
    } else {
        console.log("Error triggering scene:", error_message);
    }
});