// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
    let x = a*b*c;
    let y = (a+b) * c;
    let z = (b+c) * a;
    let m = a+b+c;
    let arr = [];
    arr.push(x, y, z, m);
    let res = arr.sort((a,b) => a-b );
     return res[res.length-1];
  }
  
