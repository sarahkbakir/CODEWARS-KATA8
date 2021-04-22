// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues(x) {
    let temp1 = x[0];
    let temp2 = x[1];
      x.splice(0,1,temp2);
      x.splice(1,1,temp1)
  }