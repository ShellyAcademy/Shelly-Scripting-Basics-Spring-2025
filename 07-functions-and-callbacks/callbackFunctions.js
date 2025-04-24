function myDisplayer(something) {
    console.log(something);
}

function myDisplayer2(something) {
    console.log("The result is:", something);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

// myDisplayer(10);

myCalculator(10, 20, myDisplayer);
myCalculator(10, 20, myDisplayer2);