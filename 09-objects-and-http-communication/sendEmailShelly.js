function sendEmailNotification(voltage) {
    const apiKey = ""; // Your API Key
    let apiUrl = "https://api.brevo.com/v3/smtp/email";
    let headers = {
        "api-key": apiKey
    };

    let body = {
        sender: {
            name: "Denis", // Name of the sender
            email: "shelly.softuni@gmail.com" // Email of the sender
        },
        to: [
            {
                name: "Shelly", // Name of first receiver
                email: "shelly.softuni@gmail.com" // Email of first receiver
            }
        ],
        subject: "Smart Home Email", // Email subject
        htmlContent: "<html><body><b>Dear</b> Denis, the current voltage is: " + voltage + "</body></html>" // Email content
    }

    Shelly.call("HTTP.Request", {
        method: "POST",
        url: apiUrl,
        headers: headers,
        body: body
    }, function (result, errorCode, errorMessage) {
        if (errorCode === 0) {
            console.log("Successfully sent email. Result is:", result.body);
        } else {
            console.log("There was an error sending the email:", errorMessage);
        }
    });
}

Shelly.call("Switch.GetStatus", { id: 0 }, function (result) {
    let voltage = result.voltage;
    sendEmailNotification(voltage);
});