// Assignment Code//
var generateBtn = document.querySelector("#generate");



var possibleChars = [];


// return arrayOf{Upper} -- random pick in array of each function//
function getUpper() {
  var arrayOfUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  return arrayOfUpper[Math.floor(Math.Random() * 26)]
}

function getLower() {
  var arrayOfLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  return arrayOfLower[Math.floor(Math.random() * 26)]
}

function getSymbols() {
  var arrayOfSymbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"]
  return arrayOfSymbols[Math.floor(Math.random() * 13)]
}

function getNumbers() {
  var arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  return arrayOfNumbers[Math.floor(Math.random() * 9)]
}



// Prompt length //
function writePassword(h) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // var password = '';

  var desiredLength = parseInt(prompt("How long do you want your password? (Between 8-128 characters)"))
  while (desiredLength < 8 || desiredLength > 128) {
    alert("password must be between 8-128 characters")
    desiredLength = prompt("How long do you want your password? (Between 8-128 characters)")
  }

  var userWantsUpper = confirm('Do you want to include uppercase letters?')
  var userWantsLower = confirm('Do you want to include lowercase letters?')
  var userWantsSymbols = confirm('Do you want to include Numbers?')
  var userWantsNumbers = confirm('Do you want to include Symbols?')

  if (!userWantsUpper && !userWantsLower && !userWantsSymbols && !userWantsNumbers) {
    alert("You must choose at least one");
    return
  }




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
}






//   for (var i = 0; i < desiredLength; i++) {
//     var charset = possibleChars[Math.floor(Math.random() * possibleChars.length)];
//     var char = charset[Math.floor(Math.Random() * charset.length)];
//     result += char;
//   }
//   return result;
// }






/////// 




// need to make sure password includes everything the user wants // 




// Add event listener to generate button // 
generateBtn.addEventListener("click", generatePassword);
