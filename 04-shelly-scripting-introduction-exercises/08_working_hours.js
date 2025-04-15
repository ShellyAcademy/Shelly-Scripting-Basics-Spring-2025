let day = "Sunday";
let time = 11;
let isOpen = false;

switch(day) {
   case "Monday":
   case "Tuesday":
   case "Wednesday":
   case "Thursday":
   case "Friday":
   case "Saturday":
     if (time >= 10 && time <= 18){
       isOpen = true;
     }
     break;
}

if (isOpen) {
  console.log("open");
} else {
  console.log("closed");
}