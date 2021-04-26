// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//Solution note:
//use desired value to replace as a regex /[regex]/
//one fro capital case and one for lower case 

function replace(s){
    return s.replace(/[aeiou]/ig,'!').replace(/[AEOIU]/ig, '!')
  }
