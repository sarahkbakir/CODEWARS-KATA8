// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function: ####javascript

// getNumberFromString(s)
// ####ruby

// get_number_from_string(s)
// ####CSharp

// GetNumberFromString(string s)

const getNumberFromString = s => Number(s.split("").filter(c => c >= '0' && c <= '9').join(""));
