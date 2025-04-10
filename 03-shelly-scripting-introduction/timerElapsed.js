let time = 2000;
let timerCounter = 0;

Timer.set(time, true, function() {
  timerCounter++;
  console.log("Timer elapsed:", time * timerCounter);   
})