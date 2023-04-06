//Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

//Solution :

function logs(x , a, b){

// log n (x) = log e (x) / log e (n)
 
  let aBase = Math.log(a) / Math.log(x);
  let bBase = Math.log(b) / Math.log(x);
  let sum = aBase + bBase ;
  
  return sum;
}
