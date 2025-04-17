let valueToSearch = 3;

let m = [
    [1, 2, 3],
    [4, 5, 6]
];

let isFound = false;

for (let row = 0; row < m.length; row++) {
    let index = m[row].indexOf(valueToSearch); // [1, 2, 3].indexOf(3)
    // let index = m.indexOf(valueToSearch); // result will be -1
    if (index != -1) {
        isFound = true;
        console.log("Found at row:", row, "and column", index);
        // access the value: m[row][index];
        console.log("Element:", m[row][index])
    }
}

if (!isFound) {
    console.log("Not Found!");
}