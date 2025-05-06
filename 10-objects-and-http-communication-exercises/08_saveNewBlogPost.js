let objToSave = {
    body: "BODY_BODY",
    title: "TITLE_TITLE"
}

let url = "http://192.168.10.220:3030/jsonstore/blog/posts";

Shelly.call("HTTP.POST", {url: url, body: JSON.stringify(objToSave) }, function(response){
  console.log(response.body);
})