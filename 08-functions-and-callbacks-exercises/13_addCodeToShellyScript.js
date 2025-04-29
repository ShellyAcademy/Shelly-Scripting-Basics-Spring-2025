function putCode() {
    let code = "console.log('Hello from newly created script and freshly addes code in it :)')";
    Shelly.call("Script.PutCode", 
    {
      "id": 4,
      "code": code 
    }, function(result) {
      let codeLengthInBytes = result.len;
      console.log("The total code length in bytes:", codeLengthInBytes);
    })
  }
  
  putCode();