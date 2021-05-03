// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

//Solution 1:
const combineNames = (firstName,lastName) => {
    return `${firstName} ${lastName}`;
  }
//Solution 2:
const combineNames = (firstName,lastName) => {
    return (firstName+' ').concat(lastName);
  }
//Solution 3:
const combineNames = (firstName,lastName) => {
    return [firstName,lastName].join(' ');
  }