function shellyObjects(array) {
    let shelly = {
        name: "",
        init: function (n) {
            this.name = n;
        },
        detail: function () {
            console.log(this.name, "is a smart addition to your home safety.");
        }
    }

    let objects = [];
    for (let i = 0; i < array.length; i++) {
        let shellyName = array[i];
        let newShelly = Object.create(shelly);
        newShelly.init(shellyName);
        objects.push(newShelly);
    }

    return objects;
}

let shellies = shellyObjects(["Shelly Flood", "Shelly Motion", "Shelly Plug S Gen3"]);
for (let i = 0; i < shellies.length; i++) {
    let shellyObj = shellies[i];
    shellyObj.detail();
}