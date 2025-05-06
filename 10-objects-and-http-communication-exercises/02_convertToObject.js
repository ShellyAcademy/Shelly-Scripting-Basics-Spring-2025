function convertToObject(input){
    let parsedInput = JSON.parse(input);
    
    for (let element in parsedInput){
      let key = parsedInput[element];
      console.log(element, "-", key);
    }
 }
 
 convertToObject('{"name": "ShellyPro4PM", "version": "1.6.1", "generation": 2}');