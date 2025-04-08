let depositedAmount = 2350;
let termOfTheDeposite = 6;
let annualInterestRate = 0.07;

let accumulatedInterest = depositedAmount * annualInterestRate;
let interestRateForOneMonth = accumulatedInterest / 12;
let totalAmount = depositedAmount + termOfTheDeposite * interestRateForOneMonth;
console.log(totalAmount);