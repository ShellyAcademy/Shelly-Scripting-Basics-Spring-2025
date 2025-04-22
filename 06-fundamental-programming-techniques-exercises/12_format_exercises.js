let input = "this is the first sentence. here is the second. and here is another.";
input = input.toLowerCase();

let sentences = input.split(". ");

for (let i = 0; i < sentences.length; i++){
  let sentence = sentences[i];
  if (sentence.length > 0) {
    sentences[i] = sentence.substring(0,1).toUpperCase() + sentence.substring(1);
  }
}

let formattedText = sentences.join(". ");
console.log(formattedText);