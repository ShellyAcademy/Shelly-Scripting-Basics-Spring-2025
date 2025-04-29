function productPrice(product) {
    let price = 0;
    if (product === "Shelly Button"){
      price = 7.20;
    } else if (product === "Shelly Flood"){
      price = 29.90;
    } else if (product === "Shelly Pro 1"){
      price = 65.50;
    } else if (product === "Shelly TRV"){
      price = 86.90;
    }
    
    return price;
  }
  
  function totalPrice(productName, quantity) {
    let pricePerProduct = productPrice(productName);
    let totalPrice = pricePerProduct * quantity;
    
    console.log(totalPrice.toFixed(2));
  }
  
  totalPrice("Shelly TRV", 2);