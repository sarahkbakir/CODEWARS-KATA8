// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.


function parseF(s) {
  
    //isNaN is a function that determines is a value is NaN or not.
    //parseFloat() function parses an argumentand  returns a floating point number.
    //the Number()- Number is used to convert Values of other types to numbers.
    //Number.isNaN - Determine whether the passed value is NaN. (true/false)
    
    let isAnum = Number.isNaN(parseFloat(s));
    
    if(isAnum) {return null}
    else {return parseFloat(s)}
    
  }