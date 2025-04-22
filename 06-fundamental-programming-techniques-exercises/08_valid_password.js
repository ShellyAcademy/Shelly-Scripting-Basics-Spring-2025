let realUserCredentials = ["jane_smith", "mypassword"];
let passwordTries = ["1234", "mypassword", "password"];

let username = realUserCredentials[0];
let actualPass = realUserCredentials[1];
let result = "Error: Incorrect password. Access denied."

for (let i = 0; i < passwordTries.length; i++) {
    let currentPassword = passwordTries[i];

    if (currentPassword === actualPass) {
        result = "Welcome, " + username;
        break;
    }
}

console.log(result);