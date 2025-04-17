let methodName = "PLUGS_UI.GetConfig";
Shelly.call("Shelly.ListMethods", null, function (result) {
    let methods = result.methods;
    let currentName = methods[0];
    let index = 0;
    let isFound = true;

    // Extract last element of an array with unknown size
    let lastIndex = methods.length - 1;
    console.log("Last index:", lastIndex);
    let lastElement = methods[lastIndex];
    console.log("Last Method is:", lastElement);

    while (currentName !== methodName) {
        currentName = methods[index];
        console.log(currentName);
        if (index == methods.length - 1) {
            isFound = false;
            break;
        }
        index++;
    }

    if (isFound) {
        console.log("Method found!", methodName);
    } else {
        console.log("Method not found!", methodName);
    }
});