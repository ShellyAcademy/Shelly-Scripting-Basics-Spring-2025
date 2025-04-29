function leftPadZero(num){
    return ((num < 10) ? "0" : "") + num;
  }
  
  function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedInMetersPerSecond = speed * 1000 / (60 * 60);
    
    let time = distance / speedInMetersPerSecond;
    let restCount = Math.floor(distance / 500);
    let restTime = restCount * 60;
    
    time += restTime;
    
    let timeHr = Math.floor(time / 3600);
    let timeMin = Math.floor((time % 3600) / 60);
    let timeSec = Math.round((time % 3600) % 60);
    
    console.log(leftPadZero(timeHr) + ":" + leftPadZero(timeMin) + ":" + leftPadZero(timeSec));
  }
  
  timeToWalk(4000, 0.60, 5);