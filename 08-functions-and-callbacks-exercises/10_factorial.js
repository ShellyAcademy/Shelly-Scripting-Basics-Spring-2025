function fact(n){
    if (n <= 1) {
      return n;
    }
    
    let data = fact(n - 1);
    return data * n;
  }
  
  console.log(fact(7));