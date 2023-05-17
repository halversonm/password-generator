// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
passwordText.value = "password goes here";
var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "\"", "+", ",", "-", ".", "/", ":", ";", "<",
  "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", " ",];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var optionsArray = [];

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();

  // Character Length Prompt
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  

  // Special Character Confirmation
  var specialCharacter = window.confirm("Click OK to confirm including special characters");
    if (specialCharacter) {
      var optionsAndSpecChar = optionsArray.concat(specialArray);
    }

  // Numeric Character Confirmation
  var numericCharacter = window.confirm("Click OK to confirm including numeric characters");
    if (numericCharacter && specialCharacter) {
      var optionsSpecAndNumChar = optionsAndSpecChar.concat(numericArray);
      console.log("user said yes and yes")
    }

    else if (numericCharacter && !specialCharacter) {
      var optionsAndNumChar = optionsArray.concat(numericArray);
      console.log("user said no and yes");
    }

  // Lowercase Character Confirmation
  var lcCharacter = window.confirm("Click OK to confirm including lowercase characters");
    if (lcCharacter && specialCharacter && numericCharacter) {
      var optionsSpecNumAndLcChar = optionsSpecAndNumChar.concat(lowercaseArray);
    }

    else if (lcCharacter && !specialCharacter && !numericCharacter) {
      var optionsAndLcChar = optionsArray.concat(lowercaseArray);
    }

    else if (lcCharacter && specialCharacter && !numericCharacter) {
      var optionsSpecAndLcChar = optionsAndSpecChar.concat(lowercaseArray);
    }

    else if (lcCharacter && !specialCharacter && numericCharacter) {
      var optionsNumandLcChar = optionsAndNumChar.concat(lowercaseArray);
    }

  // Uppercase Character Confirmation
  var ucCharacter = window.confirm("Click OK to confirm including uppercase characters");
    if (ucCharacter) {
      var optionsSpecNumLcAndUcChar = optionsSpecNumAndLcChar.concat(uppercaseArray);
    }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//for (i = 0, i < optionsArray.length, i++) {
//}



