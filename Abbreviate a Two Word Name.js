// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){
    let words = name.split(' ');
    let abrv = '';
    for(let i = 0; i < words.length; i++) {
       abrv += words[i].charAt(0).toUpperCase();
    }
    return abrv.split('').join('.');
  }