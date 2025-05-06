function vehicle() {
    let vehicle = {
        type: "NO_VALUE_PROVIDED",
        model: "NO_VALUE_PROVIDED",
        parts: {},
        fuel: 0,
        drive: function (fuelLoss) {
            //this.fuel = this.fuel - fuelLoss;
            this.fuel -= fuelLoss;
        },
        init: function (t, m, p, f) {
            this.type = t;
            this.model = m;
            this.parts = p;
            this.fuel = f;
        }
    }

    let newVehicle = Object.create(vehicle);
    newVehicle.init("S", "N", { engine: 9, power: 500 }, 840);
    newVehicle.drive(20);
    console.log(newVehicle.fuel);
    console.log(newVehicle.parts.power);
}

vehicle();