function getMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let max = getMax(5, 10);

let maxMath = Math.max(5, 10);
console.log(max);
console.log(maxMath);