Shelly.call("Switch.GetStatus", {"id": 0}, function(result) {
    let voltage = result.voltage;
    console.log(voltage);
    for (let i = 1; i <= 227; i += 3) {
      console.log(i);
    }
  })

// for (let i = 1; i <= 227; i += 3) {
//     console.log(i);
// }