// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
passwordText.value = "";

 var specialString = "!#$%&'()*\"+,-./:;<=>?@[\\]^_`{|} ~";
 var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
 var numericString = "1234567890"
 var endString = "";

 console.log("password text value before generating password: " + passwordText.value);
// var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "\"", "+", ",", "-", ".", "/", ":", ";", "<",
//   "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", " ", "~",];
// var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
//   "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
//   "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var optionsArray = [];

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();

  // Character Length Prompt
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
    if (passwordLength !== Number) {
       alert("Please enter a numeric response only");
    return;
    } 
    
    if (passwordLength > 129) {
      alert("Password must be under 129 characters");
     return;
    }
    
  

  // Special Character Confirmation
  var specialCharacter = window.confirm("Click OK to confirm including special characters");
    if (specialCharacter) {
      endString += specialString;
    }
  // var specialCharacter = window.confirm("Click OK to confirm including special characters");
  //   if (specialCharacter) {
  //     var optionsAndSpecChar = optionsArray.concat(specialArray);
  //   }

  // Numeric Character Confirmation
  var numericCharacter = window.confirm("Click OK to confirm including numeric characters");
    if (numericCharacter) {
      endString += numericString;
    }
  // var numericCharacter = window.confirm("Click OK to confirm including numeric characters");
  //   if (numericCharacter && specialCharacter) {
  //     var optionsSpecAndNumChar = optionsAndSpecChar.concat(numericArray);
  //   }

  //   else if (numericCharacter && !specialCharacter) {
  //     var optionsAndNumChar = optionsArray.concat(numericArray);
  //   }

  // Lowercase Character Confirmation
  var lcCharacter = window.confirm("Click OK to confirm including lowercase characters");
    if (lcCharacter) {
      endString += lowercaseString;
    }

  // var lcCharacter = window.confirm("Click OK to confirm including lowercase characters");
  //   if (lcCharacter && specialCharacter && numericCharacter) {
  //     var optionsSpecNumAndLcChar = optionsSpecAndNumChar.concat(lowercaseArray);
  //   }

  //   else if (lcCharacter && !specialCharacter && !numericCharacter) {
  //     var optionsAndLcChar = optionsArray.concat(lowercaseArray);
  //   }

  //   else if (lcCharacter && specialCharacter && !numericCharacter) {
  //     var optionsSpecAndLcChar = optionsAndSpecChar.concat(lowercaseArray);
  //   }

  //   else if (lcCharacter && !specialCharacter && numericCharacter) {
  //     var optionsNumandLcChar = optionsAndNumChar.concat(lowercaseArray);
  //   }

  // Uppercase Character Confirmation
  var ucCharacter = window.confirm("Click OK to confirm including uppercase characters");
    if (ucCharacter) {
      endString += uppercaseString;
    }

  if (!specialCharacter && !numericCharacter && !lcCharacter && !ucCharacter) {
      alert("No characters were included in password generation");
    }

    console.log(endString);

  // var ucCharacter = window.confirm("Click OK to confirm including uppercase characters");
  //   if (ucCharacter && specialCharacter && numericCharacter && lcCharacter) {
  //     var optionsSpecNumLcAndUcChar = optionsSpecNumAndLcChar.concat(uppercaseArray);
  //     console.log("user wanted all characters " + optionsSpecNumLcAndUcChar);
  //   }

  //   else if (ucCharacter && !specialCharacter && !numericCharacter && !lcCharacter) {
  //     var optionsAndUcChar = optionsArray.concat(uppercaseArray);
  //     console.log("user wanted only UC characters " + optionsAndUcChar);
  //   }

  //   else if (ucCharacter && !specialCharacter && !numericCharacter && lcCharacter) {
  //     var optionsLcAndUcChar = optionsAndLcChar.concat(uppercaseArray);
  //     console.log("user wanted LC and UC characters " + optionsLcAndUcChar);
  //   }

  //   else if (ucCharacter && !specialCharacter && numericCharacter && !lcCharacter) {
  //     var optionsNumAndUcChar = optionsAndNumChar.concat(uppercaseArray);
  //     console.log("user wanted num and UC characters " + optionsNumAndUcChar);
  //   }

  //   else if (ucCharacter && specialCharacter && !numericCharacter && !lcCharacter) {
  //     var optionsSpecAndUcChar = optionsAndSpecChar.concat(uppercaseArray);
  //     console.log("user wanted spec and UC characters " + optionsSpecAndUcChar);
  //   }

  //   else if (ucCharacter && specialCharacter && numericCharacter && !lcCharacter) {
  //     var optionsSpecNumAndUcChar = optionsSpecAndNumChar.concat(uppercaseArray);
  //     console.log("user wanted spec, num, and UC characters " + optionsSpecNumAndUcChar);
  //   }

  //   else if (ucCharacter && specialCharacter && !numericCharacter && lcCharacter) {
  //     var optionsSpecLcAndUcChar = optionsSpecAndLcChar.concat(uppercaseArray);
  //     console.log("user wanted spec, lc, and uc characters " + optionsSpecLcAndUcChar);
  //   }

  //   else if (ucCharacter && !specialCharacter && numericCharacter && lcCharacter) {
  //     var optionsNumLcAndUcChar = optionsNumandLcChar.concat(uppercaseArray);
  //     console.log("user wanted num, lc and uc characters " + optionsNumLcAndUcChar);
  //   }

  //   else alert("We've ran into a problem, please reach out to let us know what selections you've made");

      // if (optionsNumLcAndUcChar) {
      //   console.log("hello");
      // }
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordLength);
    passwordText.value += endString.substring(randomIndex, randomIndex+1);
  }

  console.log(passwordText);
  console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




