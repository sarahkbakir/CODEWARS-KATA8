// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    //   split the beast and dish strings to arrays
      let words = dish.split(' ');
      let name = beast.split(' ')
    //   find the first item in both arrays - splitted to letters
      let firstdish = words[0].split('');
      let firstname = name[0].split('');
    //   find the last item in both - splitted to letters
      let lastdish = words[words.length-1].split('');
      let lastname = name[name.length -1].split('');
    //   check if the first letter in first-words and the last letter in both last-words are the same
      if(firstdish[0] === firstname[0] && lastdish[lastdish.length-1] === lastname[lastname.length-1]) {
        return true;
      } 
      return false;
    }