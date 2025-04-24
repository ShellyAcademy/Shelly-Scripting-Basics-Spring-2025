function getMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function multiply(a, b) {
    console.log(a * b);
    let c = a * b;
}

multiply(getMax(5, 10), 20);