let deviceName = "PM Mini Gen4";
let averageVoltagesByMonths = [220,210,215,201,217,219,223,213,205];
let sumOfAllVoltages = 0;
let brokenCount = 0;
let i;

for (i = 0; i < averageVoltagesByMonths.length; i++) {
   let currentMonthVolt = averageVoltagesByMonths[i];
   if (currentMonthVolt < 210) {
     brokenCount++;
     if (brokenCount > 1) {
       break;
     }
   }
   
   sumOfAllVoltages += currentMonthVolt;
}

if (brokenCount > 1) {
  console.log("Plus Plug S has been thrown away at month", i + 1);
} else {
  console.log(deviceName, "works well!", "\nAverage Voltage:", (sumOfAllVoltages / averageVoltagesByMonths.length).toFixed(0))
}