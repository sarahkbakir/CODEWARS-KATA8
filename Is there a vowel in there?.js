// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//Solution 1:
function isVow(a){
    const vowels = "aeiou".split('');
    const vowelCodes = vowels.map(c => c.charCodeAt(0));
    
    for(let i = 0; i < a.length; i++)
    {
        const idx = vowelCodes.indexOf(a[i]);
        if (idx >= 0) {
          a[i] = vowels[idx];
        }
    }
    
    return a;
    
  }

  //Solution 2:

  unction isVow(a){
    const vowels = "aeiou".split('');
    
    for(let i = 0; i < a.length; i++)
    {
        const char = String.fromCharCode(a[i]);
      
        if (vowels.includes(char)) {
          a[i] = char;
        }
    }
    
    return a;
    
  }

  //Solution 3:

  function isVow(a){
    const vowels = "aeiou".split("");
    
    const f = code => {
      const char = String.fromCharCode(code);
      return vowels.includes(char)? char : code;
    };
    
    return a.map(f);
  }

  