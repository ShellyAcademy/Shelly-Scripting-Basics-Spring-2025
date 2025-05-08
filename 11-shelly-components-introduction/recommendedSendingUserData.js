let userData1 = {
    debug: true,
    label: "Request A"
  };
  
  let userData2 = {
    debug: false,
    label: "Request B"
  };
  
  function handleResponse(result, error_code, error_message, ud) {
    if (error_code !== 0) {
      console.log(ud.label + "failed with error: " + error_message);
      return;
    }
    
    if (result && result.code === 200) {
      let data = JSON.parse(result.body);
      let postCode = data['post code'];
      let country = data.country;
      
      if (ud.debug === true) {
        console.log(ud.label + " - Post Code: " + postCode);
        console.log(ud.label + " - Country: " + country);
      } else {
        console.log(ud.label + " Debug off. Data hidden");
      }
    }
  }
  
  Shelly.call("HTTP.Get", {url: "https://api.zippopotam.us/us/94115"}, handleResponse, userData1);
  Shelly.call("HTTP.Get", {url: "https://api.zippopotam.us/us/94115"}, handleResponse, userData2);