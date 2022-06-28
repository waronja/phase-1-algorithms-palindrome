function isPalindrome(word) {
  // Write your algorithm here
  
  const length = word.length;  
   
  for (let i = 0; i < length / 2; i++) {   
    if (word[i] !== word[length - 1 - i]) {  
      return false;  
    }  
  }  
  return true;  
}

/* 
  Initialize the length of the word in a const variable called length

  Iterate over the length of the word and also initialize a variable with let
    if the letter at index i is not equal to the letter at index (length - 1- i)
      return false
    else
      return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
