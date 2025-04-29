function printReverseRecursive(n){
    if (n <= 1) {
       return console.log(n); 
    }
    
    console.log(n);
    printReverseRecursive(n - 1);
  }
  
  printReverseRecursive(10);