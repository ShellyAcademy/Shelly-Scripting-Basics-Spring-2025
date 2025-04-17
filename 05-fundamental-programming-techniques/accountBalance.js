// let arr = [5.51, 69.42, 100, -1];
let arr = [120, 45.55, -150];
let balance = 0;
let index = 0;
let deposit = arr[index];
let arrLastIndex = arr.length - 1;

while (deposit > 0 && index <= arrLastIndex) {
    let amount = deposit;
    balance += amount;
    console.log("Increase: ", amount.toFixed(2));
    index++;
    deposit = arr[index];
}

console.log("Total:", balance.toFixed(2));