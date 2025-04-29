function loadingBar(num){
    if (num === 100) {
      console.log("100 % complete!");
    }
    else {
      console.log(num, "% Still loading...")
    }
  }
  
  loadingBar(50);