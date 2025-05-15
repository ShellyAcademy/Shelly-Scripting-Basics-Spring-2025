function createURL(ipAdress, id, status) {
    return "http://" + ipAdress + "/rpc/Switch.Set?id=0" + id + "&on=" + status;
}

Shelly.addStatusHandler(function (evData) {
    let component = evData.component;
    let componentType = component.split(":")[0];
    // console.log(componentType);
    if (componentType === "boolean") {
        let id = component.split(":")[1];
        // console.log(JSON.stringify(evData.delta.value));
        let status = evData.delta.value;
        console.log(status);
        switch (id) {
            case "200":
                Shelly.call("HTTP.Get", {
                    url: createURL("192.168.10.105", 1, status)
                });
                break;
            case "201":
                Shelly.call("HTTP.Get", { url: createURL("192.168.10.245", 0, status) });
                break;
            case "202":
                Shelly.call("HTTP.Get", { url: createURL("192.168.10.216", 0, status) }, function (result) {
                    console.log(result);
                });
                break;
        }
    }
});