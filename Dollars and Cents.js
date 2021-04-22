// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

// solution 1:

function formatMoney(num){

  
    let dollars = Math.floor(num);
    let cents = (num-dollars);
    
    if(cents.length <=1) {
      cents = cents.toFixed(2)
      }
    
    if (num % 1 === 0) {
    return `$${num}.00`;
      } 
    else if(num % 1 !== 0 ) {
    
    return `$${(dollars+cents).toFixed(2)}`
      }
    
  }

//   solution 2:
function formatMoney(num){
    return `$${num.toFixed(2)}`;
  }