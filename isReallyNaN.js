// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

//NOTE: 

//-MDN - (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

//The isNaN() function determines whether a value is NaN or not. Because coercion inside the isNaN function can be surprising, you may alternatively want to use Number.isNaN().

const isReallyNaN = (val) => {
    return Number.isNaN(val)? true : false
  }
