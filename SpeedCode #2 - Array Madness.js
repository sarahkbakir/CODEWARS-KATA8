// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
    let sumA =0;
      let sumB =0;
      for(let i = 0; i < a.length; i++) {
        sumA += Math.pow(a[i],2)
      }
      for(let j =0; j < b.length; j++) {
        sumB += Math.pow(b[j],3)
      }
      return sumA > sumB ? true : false;
    }