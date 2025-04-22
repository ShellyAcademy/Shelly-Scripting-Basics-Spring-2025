let counter = 0;
let data = [];

let timer = Timer.set(10_000, true, function() {
  counter++;
  let temp = Shelly.getComponentStatus("Switch:0").temperature.tC;
  data[counter] = temp;
  console.log("Added new temperature: ", temp, "°C");
  if (counter == 10) {
    Timer.clear(timer);
    let number = getMaxTemperature();
    console.log("Highest saved temperature:", number, "°C")
  }
})

function getMaxTemperature(){
  let highestTemp = 0;
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    if (element > highestTemp ) {
      highestTemp = element;
    }
  }
  return highestTemp;
}