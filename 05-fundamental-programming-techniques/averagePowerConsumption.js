let powerConsumptions = []; // initialize as empty array

let switchStatus = Shelly.getComponentStatus("switch:0");
let consumption = switchStatus.apower;
console.log(switchStatus);
console.log(consumption);

Timer.set(
    10000, // every 10000 microseconds == 10 seconds
    true, // repeat the timer
    function () { // callback function
        let switchStatus = Shelly.getComponentStatus("switch:0");
        let consumption = switchStatus.apower;
        // console.log(switchStatus);
        // console.log(consumption);

        powerConsumptions.push(consumption);
        if (powerConsumptions.length === 6) {
            let totalPerMinute = 0;
            for (let i = 0; i < powerConsumptions.length; i++) {
                totalPerMinute += powerConsumptions[i];
            }

            let avgConsumption = totalPerMinute / powerConsumptions.length;
            console.log("Power Consumption last minute:", totalPerMinute);
            console.log("Average consumption was:", avgConsumption, "watts");
            powerConsumptions = [];
        }
    }
)