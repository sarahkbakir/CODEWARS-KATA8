// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c

function generateLink(user) {
    //  encodeURIComponent function encodes a URI by replacing each instance of certain characters representing the UTF-8 encoding of the character 
      let x = `http://www.codewars.com/users/${encodeURIComponent(user)}`;
      return x;
    }