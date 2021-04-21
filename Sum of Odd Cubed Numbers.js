// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

function cubeOdd(arr) {
    let res = 0;
  
    for(let i = 0; i < arr.length; i++) {
      
      if(isNaN(arr[i]) === false && arr[i] % 2 !== 0) {
      
        let x = Math.pow(arr[i],3);
       
        res += x;
        
      } else if(isNaN(arr[i])) {
        return undefined
      }  
    }
    return res;
  }