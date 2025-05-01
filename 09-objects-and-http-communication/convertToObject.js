let jsonString = '{"name": "George", "age": 30, "city": "London"}';
console.log(jsonString);
console.log(typeof jsonString);
// Wrong since jsonString is not an object
console.log(jsonString.name);

let obj = JSON.parse(jsonString);
console.log(typeof obj);
// result.voltage
console.log(obj.name);
for (let prop in obj) {
    console.log(prop, "-", obj[prop]);
}
