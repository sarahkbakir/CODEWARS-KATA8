// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let y = [];
    
    for(let i = 0; i < x.length; i++) {
      if(x[i] < 5) {
       y.push(0);    
      } else {
      y.push(1);
      }
    }
    
  return y.join('');
    
  }