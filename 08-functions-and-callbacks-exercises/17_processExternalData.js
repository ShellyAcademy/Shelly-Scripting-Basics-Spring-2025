Shelly.call("HTTP.GET", { url: "http://dummyjson.com/users/6"}, function(result) {
    let data = JSON.parse(result.body);
    let userAge = data.age
    let ageCriteria = 22;
    if (userAge > ageCriteria) {
      console.log("Yes, user with ID: 1 is bigger than", ageCriteria, " years old");
    } else {
      console.log("No, user with ID: 1 is NOT bigger than", ageCriteria, " years old");
    }
  })