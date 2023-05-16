// Assignment code here
var characterLength = window.prompt("How many characters would you like your password to contain?");
console.log("Character Length " + characterLength);

var specialCharacter = window.confirm("Click OK to confirm including special characters");
// if (specialCharacter) {}
  // add special character array to array of options

  var numericCharacter = window.confirm("Click OK to confirm including numeric characters")



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialArray = [];
var uppercaseArray = [];
var lowercaseArray = [];
var numericArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
