// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// solution 1:
function twoSort(s) {
    s.sort();
    const first = s[0];
    
    return first.split('').join('***');
  }

//   solution 2:
// 1 line code block
const twoSort = s => s.sort()[0].split('').join('***');
