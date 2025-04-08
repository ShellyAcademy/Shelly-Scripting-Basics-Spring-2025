let inputMeters = 550;
let price = inputMeters * 7.61;
let discount = price * 0.18;
let finalPrice = price - discount;
console.log("The final price is:", finalPrice.toFixed(2), "USD.");
console.log("The discount is", discount.toFixed(2), "USD.")