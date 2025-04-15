let data = Shelly.getComponentStatus("sys");
let upTimeInSeconds = data.uptime;

console.log(upTimeInSeconds);
if (upTimeInSeconds <= 3600) {
  console.log("Fresh and feeling good!.");
} else if (upTimeInSeconds > 3600 && upTimeInSeconds <= (3600 * 3)) {
  console.log("Feeling productive!");
} else {
  console.log("Tired a lot!");
}