// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialArray = [];

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "W", "X", "Y", "Z"];

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  // Character Length Prompt
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  console.log("Password Length " + passwordLength);

  // Special Character Confirmation
  var specialCharacter = window.confirm("Click OK to confirm including special characters");
  console.log("Special Characters? " + specialCharacter);
  // if (specialCharacter) {}
    // add special character array to array of options

  // Numeric Character Confirmation
  var numericCharacter = window.confirm("Click OK to confirm including numeric characters");
  console.log("Numeric Characters? " + numericCharacter);

  // Lowercase Character Confirmation
  var lcCharacter = window.confirm("Click OK to confirm including lowercase characters");
  console.log("Lowercase Characters? " + lcCharacter);

  // Uppercase Character Confirmation
  var ucCharacter = window.confirm("Click OK to confirm including uppercase characters");
  console.log("Uppercase Characters? " + ucCharacter);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
