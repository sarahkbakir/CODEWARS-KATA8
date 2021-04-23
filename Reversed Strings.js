// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


function solution(str){
    let revArr = str.split('');
    let rev = revArr.reverse();
    
    return rev.join('');
  }