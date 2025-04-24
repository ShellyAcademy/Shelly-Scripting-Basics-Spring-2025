function readFullName(firstName, lastName) {
    console.log("Before return statement");
    return firstName + " " + lastName;
    // Will not be shown on the console
    console.log("After return statement");
}

let fullName = readFullName("Shelly", "Uni");
console.log(fullName);