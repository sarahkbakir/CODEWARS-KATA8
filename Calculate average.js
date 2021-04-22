// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let sum = 0;
    
    //   check if array is empty
      if(array.length <= 0) {
        return 1;
      }
    
      //   loop to get the sum of all items in given array
      for(let i = 0; i < array.length; i++) {
          sum += array[i];  
        }
     
        // return average
      return sum/array.length;
    }