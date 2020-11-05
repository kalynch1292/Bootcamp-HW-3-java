var generateBtn = document.querySelector("#generate");






var arrayOfUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 
var arrayOfLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var arrayOfSymbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"]

var arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]




// Prompt length //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var possibleChars = [];
  var eachCharacters = []
  var desiredLength = parseInt(prompt("How long do you want your password? (Between 8-128 characters)"))
  while (desiredLength < 8 || desiredLength > 128) {
    alert("password must be between 8-128 characters")
    desiredLength = prompt("How long do you want your password? (Between 8-128 characters)")
  }
  while (possibleChars.length === 0) {
    
    if (confirm('Do you want to include uppercase letters?')) {
      possibleChars.push(arrayOfUpper)
      eachCharacters.push(arrayOfUpper[Math.floor(Math.random()*arrayOfUpper.length)])
    }
    if (confirm('Do you want to include lowercase letters?')) {
      possibleChars.push(arrayOfLower)
      eachCharacters.push(arrayOfLower[Math.floor(Math.random()*arrayOfLower.length)])
    }
    if (confirm('Do you want to include Numbers?')) {
      possibleChars.push(arrayOfNumbers)
      eachCharacters.push(arrayOfNumbers[Math.floor(Math.random()*arrayOfNumbers.length)])
    }
    if (confirm('Do you want to include Symbols?')) {
      possibleChars.push(arrayOfSymbols)
      eachCharacters.push(arrayOfSymbols[Math.floor(Math.random()*arrayOfSymbols.length)])
    }
    if(possibleChars.length === 0){
      alert("You must select a character type")
    }
  }


  var result = [];
  for (var i = 0; i < desiredLength; i++) {
    console.log('in loop')
    var charset = possibleChars[Math.floor(Math.random() * possibleChars.length)];
    var char = charset[Math.floor(Math.random() * charset.length)];
    result.push(char);
  }
  console.log(result)
  for (let j = 0; j < eachCharacters.length; j++) {
    result[j]=eachCharacters[j]

  }
  console.log(result)
  return result.join("");
}











// Add event listener to generate button // 
generateBtn.addEventListener("click", writePassword);
