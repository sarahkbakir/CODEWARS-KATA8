// Write a function that rearranges an integer into its largest possible value.

// Example (Input --> Output)

// 123456 --> 654321
// 105 --> 510
// 12 --> 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it


function superSize(num){
    //turn a number to digits in an array
      let digits = num.toString().split('');
    // sort the array of digits descending   
      let x = digits.sort((a,b) => { return b-a})
      
      return Number(x.join(''));
    }