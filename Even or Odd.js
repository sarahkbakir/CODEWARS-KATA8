// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    let even = 'Even';
    let odd = 'Odd';
    
    if(number % 2 == 0) {
      return even;
    } else return odd;
  }