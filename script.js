// Variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
passwordText.value = "";

 var specialString = "!#$%&'()*\"+,-./:;<=>?@[\\]^_`{|} ~";
 var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
 var numericString = "1234567890"
 var endString = "";


function writePassword() {

  // Character Length Prompt
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
    // if (passwordLength !== Number) {
    //   alert("Please enter a numeric response only");
    //   return;
    // } 
    
    if (passwordLength > 129) {
      alert("Password must be under 129 characters");
     return;
    }
    
  

  // Special Character Confirmation
  var specialCharacter = window.confirm("Click OK to confirm including special characters");
    if (specialCharacter) {
      endString += specialString;
    }

  // Numeric Character Confirmation
  var numericCharacter = window.confirm("Click OK to confirm including numeric characters");
    if (numericCharacter) {
      endString += numericString;
    }

  // Lowercase Character Confirmation
  var lcCharacter = window.confirm("Click OK to confirm including lowercase characters");
    if (lcCharacter) {
      endString += lowercaseString;
    }

  // Uppercase Character Confirmation
  var ucCharacter = window.confirm("Click OK to confirm including uppercase characters");
    if (ucCharacter) {
      endString += uppercaseString;
    }

  if (!specialCharacter && !numericCharacter && !lcCharacter && !ucCharacter) {
      alert("No characters were included in password generation");
      return;
    }

  console.log ("This is endString before for loop: " + endString);

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * endString.length);
    passwordText.value += endString.substring(randomIndex, randomIndex+1);
  }
}

generateBtn.addEventListener("click", writePassword);




