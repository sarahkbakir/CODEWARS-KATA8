// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
    let res = [];
      
      for(let i = 0; i < arr.length; i++) {
    //   check if counter i is even or odd - if even ONLY push to result array
        if(i % 2 === 0) {
          res.push(arr[i]);
        }
      }
    return res;
    }