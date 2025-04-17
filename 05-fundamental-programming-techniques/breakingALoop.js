let arr = ["SoftUni", "Shelly", "Plug S", "Stop", "AfterStop"];
let index = 0;
while (true) {
  let str = arr[index];
  index++;
  if (str === "Stop") {
    break;
  }
  console.log(str);
}