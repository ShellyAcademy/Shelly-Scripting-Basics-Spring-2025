Shelly.call("Shelly.ListMethods", { "id": 0 }, function (result) {
    let array = result.methods;
    for (let i = 0; i < array.length; i++) {
        let currentText = array[i];
        if (currentText.indexOf('Shelly') === 0) {
            console.log(currentText);
        }
    }
}
)