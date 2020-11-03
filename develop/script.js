// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleChars = [];
var arrayOfUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayOfLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayOfSymbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



//// while loop ///
function writePassword() {
  var desiredLength = prompt("How long do you want your password? (Between 8-120 characters)")
  while (i < 8 || i > 128) {
    desiredLength = prompt("How long do you want your password? (Between 8-120 characters)")
  }
}








// help//
var confirmStyle  
if (userWantsUpper) {
  possibleChars.push(arrayOfUpper)
}
if (userWantsLower) {
  possibleChars.push(arrayOfLower)
}
if (userWantsSymbols) {
  possibleChars.push(arrayOfSymbols)
}

if (userWantsNumbers) {
  possibleChars.push(arrayOfNumbers)
}



/////// 


function genPassword() {
  var result = [];
  for (var i = 0; i < desiredLength; i++) {
    var charset = possibleChars[Math.floor(Math.random() * possibleChars.length)];
    var char = charset[Math.floor(Math.Random() * charset.length)];
    result += char;
  }
  return result;
}


// need to make sure password includes everything the user wants // 




// Add event listener to generate button // 
generateBtn.addEventListener("click", genPassword);
