let arr = [100, 10, 20, 30, 45];
let sum = 0;
let index = 1;
let n = arr[0];

while (sum < n) {
  let currentNum = arr[index];
  sum += currentNum;
  index++
}

console.log(sum);