Shelly.call("HTTP.Get", { url: "https://api.open-meteo.com/v1/forecast?latitude=42.69&longitude=23.32&timezone=Europe/Sofia&daily=weathercode" }, function (result) {
    if (result && result.code && result.code == 200) {
        let response = JSON.parse(result.body);
        // console.log(response);
        let timeArray = response.daily.time;
        let codeArray = response.daily.weathercode;
        let description = "";

        for (let i = 0; i < timeArray.length; i++) {
            let date = timeArray[i];
            let code = codeArray[i];

            console.log("Date:", date, "-", "Weather Code:", code);
        }

    }
});