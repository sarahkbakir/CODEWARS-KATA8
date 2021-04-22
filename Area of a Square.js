// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
    //   A is (1/4) of full Circumference which = 2 * PI * radius
      let radius = (A*4)/ (2 * Math.PI);
    //   radius represents one side of the square - square area is (side * side);
      return Number((radius * radius).toFixed(2));
    }