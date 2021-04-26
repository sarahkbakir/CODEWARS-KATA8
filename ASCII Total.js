// ou'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(x){
    let sum = 0;
    for(let i = 0; i < x.length; i++) {
      sum+= x.charCodeAt(i)
    }
    return sum
  }
    