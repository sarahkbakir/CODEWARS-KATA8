// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    let res = [];
      for(let i = 0; i <a.length; i++) {
        if(!res.includes(a[i])) {res.push(a[i])}
      }
      return res;
    }