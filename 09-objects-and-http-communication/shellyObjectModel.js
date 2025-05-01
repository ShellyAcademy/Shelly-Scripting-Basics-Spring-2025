let shelly = {
    name: "",
    value: null,
    init: function (n, v) {
        this.name = n;
        this.value = v;
    }
}

let shellyDevice = Object.create(shelly);
shellyDevice.init("Shelly Pro", 1);

console.log(shellyDevice.name, shellyDevice.value);