// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


function smash (words) {
    let sentence = '';
    
   //check for empty array
    if(words.length <= 0) {
      return '';
    }
  
    // make a string of words without the last word in array
    for(let i = 0; i < words.length-1; i++) { 
          sentence += `${words[i]} `;
  }
    //make the full statement with adding the last word in array
    let res = sentence.concat(words[words.length-1]); 
      return res;
  };