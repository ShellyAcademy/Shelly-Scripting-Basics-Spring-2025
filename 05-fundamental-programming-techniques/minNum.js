let arr = [72, 100, 99, 80, 70];
let minNum = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i];
    }
}

console.log(minNum);