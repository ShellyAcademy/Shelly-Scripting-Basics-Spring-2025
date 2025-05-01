Shelly.call("HTTP.Get", { url: "https://api.zippopotam.us/us/94115" }, function (result) {
    // console.log(result);
    if (result && result.code && result.code == 200) {
        let data = JSON.parse(result.body);
        // console.log(JSON.stringify(result.body));
        let postCode = data["post code"];
        console.log("Post Code is:", postCode);

        let country = data.country;
        console.log("Country is:", country);
    }
});