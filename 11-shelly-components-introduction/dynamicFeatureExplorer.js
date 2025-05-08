Shelly.call("Shelly.ListMethods", {}, function (result) {
    let methods = result.methods;

    // Categories
    let controlMethods = [];
    let statusMethods = [];
    let configMethods = [];
    let otherMethods = [];

    // Categorize methods
    methods.forEach(function (method) {
        if (method.indexOf("Set") !== -1) {
            controlMethods.push(method);
        } else if (method.indexOf("Get") !== -1) {
            statusMethods.push(method);
        } else if (method.indexOf("Config") !== -1) {
            configMethods.push(method);
        } else {
            otherMethods.push(method);
        }
    })

    // Log methods
    console.log("Control Methods:", controlMethods);
    console.log("Status Methods:", statusMethods);
    console.log("Configuration Methods:", configMethods);
    console.log("Other Methods:", otherMethods);
});