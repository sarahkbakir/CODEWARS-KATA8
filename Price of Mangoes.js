// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

function mango(quantity, price){
    let free = Math.floor(quantity/3);
      let paid = Math.floor(quantity - free);
     let total = paid * price;
      
      if(quantity <= 2) {
       return total = quantity * price;
        
      } else if(quantity %2 === 0) {
        paid = quantity - (quantity/3);
        
      } else if(quantity %2 !== 0) {
        free = free + 1
      }
      
      return total;
    }