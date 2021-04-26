// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
    let hexStr = hexString.toString(16)
   return parseInt(hexStr, 16);
 }