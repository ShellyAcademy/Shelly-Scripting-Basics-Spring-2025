let url = "https://v2.jokeapi.dev/joke/Programming?safe-mode";
Shelly.call("HTTP.GET", {url: url}, function(response){
  let parsedResponse = JSON.parse(response.body);
  let type = parsedResponse.type;
  let joke = "";
  if (type == "single"){
    joke = "The joke is: " + parsedResponse.joke;
  } else {
    let firstPart = parsedResponse.setup;
    let secondPart = parsedResponse.delivery;
    
    joke = "The setup is: " + firstPart + "\nThe delivery is: " + secondPart;
  }
  console.log(joke);
})