// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

//Solution 1:
function findDifference(a, b) {
    let arr = [];
    
    let vol1 = a[0]*a[1]*a[2];
    let vol2 = b[0]*b[1]*b[2];
    
    let diff = vol1 - vol2
    return diff > 0 ? diff : diff*-1;
    
  }

  //Solution 2:
  function findDifference(a, b) {
    return (a[0]*a[1]*a[2] - b[0]*b[1]*b[2]) > 0 ? (a[0]*a[1]*a[2] - b[0]*b[1]*b[2]) : (a[0]*a[1]*a[2] - b[0]*b[1]*b[2])*-1;
    }

    // Solution 3:
    function findDifference(a, b) {
        return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2])
        }