let maxCounter = 10;
let counter = 0;

let timerHandler = Timer.set(200, true, function(){
  Shelly.call("Switch.Toggle", {"id": 0});
  console.log(counter);
  counter++;
  if (counter >= maxCounter){
    console.log("Blinking Finished!");
    Timer.clear(timerHandler);
  }  
})