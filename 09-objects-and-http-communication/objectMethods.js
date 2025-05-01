let device = {
    sayHello: function () {
        console.log("Hi, guys");
    }
};

device.sayHello();

let person = { name: "Peter", age: 20 };
person.sayHello = function () {
    console.log("Hi, guys, from Peter");
}
person.sayHello();