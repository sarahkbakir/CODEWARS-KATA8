// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    let sum = 0;
    
    //if n and m are negative or 0 return invalid message
    
    if(n <= 0 || m <= 0) {
     return 'INVALID' 
    }
    
    let x = m-1;
    
    //the limit is m-1 since : m is excluded
    
    for(let i = 1; i*n <= x; i++) {
      sum += n*i;
  }
    
    return sum
  }