let str1 = "Apple";
let str2 = "Pabble";

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

let matchCount = 0;

for (let i = 0; i < str1.length; i++){
  let currentChar = str1[i];
  let isFound = false;
  
  for (let j = 0; j < str2.length; j++){
    if (currentChar === str2[j]){
      isFound = true;
      break;
    }
  }
  
  if (isFound == true) {
    matchCount++;
  } else {
    break;
  }
}

if (str1.length === str2.length && matchCount === str1.length){
  console.log("Anagram found!");
} else {
  console.log("Anagram NOT found!");
}