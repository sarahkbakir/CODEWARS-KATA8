// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

//Solution 1:
function toCsvText(array) {
    let res = '';
    for (let i =0; i <array.length; i++) {
       res += array[i].toString('');
      
      
      if(i < array.length-1) {
        res += '\n';
      }
    }
    return res;
  }

//Solution 2:

function toCsvText(array) {
    let res = '';
    
    for(let i = 0; i <array.length - 1; i++) {
      res += array[i].toString() + '\n';
    }
    
    if (array.length > 0)
      res += array[array.length - 1].toString();
    
    return res;
  }

  //Solution 3:

  function toCsvText(array) {
    return array.map(a => a.toString()).join("\n");
  }

  //Solution 4:

  function toCsvText(array) {
    return array.map(a => a.join(",")).join("\n");
  }
  