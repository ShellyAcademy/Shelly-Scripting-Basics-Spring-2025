let arr = [4, 5, 6, 7, 8, 9];

console.log("Length of the array is:", arr.length);

// select elements from index 2 to index 5 (non inclusive) [2, 5)

let subArray = arr.slice(2, 5);// Slice itself will not modify the array, it does not modify our array to contain only this info

console.log(subArray);

// slice does not modify original array - it returns new array with the selected elements
console.log(arr);