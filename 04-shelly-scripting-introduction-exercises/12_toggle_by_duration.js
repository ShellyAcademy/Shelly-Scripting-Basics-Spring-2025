let firstParam = 2;
let secondParam = 3;
let sum = firstParam + secondParam;

Timer.set(sum * 1000, true, function(){
  Shelly.call("Switch.Toggle", {"id": 0});
})