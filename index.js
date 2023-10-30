
function reverseInputString(input) {
  return input.split("").reverse().join("");
}
function isPalindrome(word) {
  // Write your algorithm here

  //reverse the input string
  const reversedWord = reverseInputString(word);

  //Compare the reversed word to the initial word before reversing
  return word === reversedWord;

}

/* 
  Add your pseudocode here

  reverse the input word

  if the revesed word is the same as the original word
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  The request is to create a isPalindrome function that takes an input string as an argument and returns either true or false. When the input string
  can be read the same way forwards and backwards, the function should return true. When the input string cannot be read the same way forwards and backwards,
  the function should return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("man"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));

  console.log("");
}

module.exports = isPalindrome;
