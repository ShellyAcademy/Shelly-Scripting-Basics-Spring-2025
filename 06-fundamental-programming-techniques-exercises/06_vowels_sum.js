let input = "dmmr";
let sumOfVowelChars = 0;

for (let i = 0; i < input.length; i++){
  let currentChar = input[i];
  if (currentChar === "a") {
    sumOfVowelChars += 1;
  } else if (currentChar === "e"){
    sumOfVowelChars += 2;
  } else if (currentChar === "i") {
    sumOfVowelChars += 3;
  } else if (currentChar === "o") {
    sumOfVowelChars += 4;
  } else if (currentChar === "u") {
    sumOfVowelChars += 5;
  }
}
console.log(sumOfVowelChars);