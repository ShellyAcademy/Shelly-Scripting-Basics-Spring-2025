//function smallestNumber(firstNum, secondNum, thirdNum) {
//  return Math.min(Math.min(firstNum, secondNum), thirdNum);
//}

function smallestNumber(firstNum, secondNum, thirdNum) {
    let theSmallestNum = firstNum;
    
    if (secondNum < theSmallestNum) {
      theSmallestNum = secondNum;
    }
    
    if (thirdNum < theSmallestNum) {
      theSmallestNum = thirdNum;
    }
    
    return theSmallestNum;
  }
  
  console.log(smallestNumber(2, 2, 2));