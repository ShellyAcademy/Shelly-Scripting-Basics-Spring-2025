let arr = [72, 100, 99, 80, 70];
let maxNum = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
        maxNum = arr[i];
    }
}

console.log(maxNum);