let obj = {
    firstName: "George",
    lastName: "Peterson",
    age: 30,
    city: "London",
    height: 180,
    weight: 85
}

console.log(obj);
// console.log(typeof obj);
let jsonString = JSON.stringify(obj);
console.log(jsonString);