let protectiveNylonPerSquareMeter = 1.50;
let paintPerLiter = 14.50;
let paintThinnerPerLiter = 5;

let requiredAmountOfNylon = 10;
let requiredAmountOfPaint = 11;
let requiredPaintThinner = 4;
let craftsmanWorkHours = 8;

let additionalAmountOfPaint = requiredAmountOfPaint * 0.10; 
let additionalAmountOfNylon = 2;
let additionalAmountForBags = 0.40;

let allAmountOfPaint = (requiredAmountOfPaint + additionalAmountOfPaint) * paintPerLiter;
let allAmountForNylon = (requiredAmountOfNylon + additionalAmountOfNylon) * protectiveNylonPerSquareMeter;
let allAmountForPaintThinner = requiredPaintThinner * paintThinnerPerLiter;

let sumOfAllAmounts = allAmountOfPaint + allAmountForNylon + allAmountForPaintThinner + additionalAmountForBags;
let craftsmanAmount = sumOfAllAmounts * 0.3 * craftsmanWorkHours;
let totalAmount = sumOfAllAmounts + craftsmanAmount;
console.log(totalAmount);