let userData;

 function handleResponse(result, error_code, error_message) {
    if (error_code !== 0) {
      console.log(ud.label + "failed with error: " + error_message);
      return;
    }
    
    if (result && result.code === 200) {
      let data = JSON.parse(result.body);
      let postCode = data['post code'];
      let country = data.country;
      
      if (userData.debug === true) {
        console.log(userData.label + " - Post Code: " + postCode);
        console.log(userData.label + " - Country: " + country);
      } else {
        console.log(userData.label + " Debug off. Data hidden");
      }
    }
}

// First request
userData = {
  debug: true,
  label: "Request A"
};

 Shelly.call("HTTP.Get", {url: "https://api.zippopotam.us/us/94115"}, handleResponse);

// Second request
userData = {
  debug: false,
  label: "Request B"
};

Shelly.call("HTTP.Get", {url: "https://api.zippopotam.us/us/94115"}, handleResponse);