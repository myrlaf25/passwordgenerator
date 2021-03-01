// Array of special characters to be included in password
var specialChars = "!@#$%^&*()";
 
// Array of numeric characters to be included in password
var numericChars = "0123456789";

// Array of lowercase characters to be included in password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  
// Array of uppercase characters to be included in password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


var finalPassword = document.getElementById("password");
var length = prompt("Enter a password Length between ....");

function getPassword() {
  var specialCharacters = confirm(
    "Your password will include Special Characters."
  );
  console.log(specialCharacters);
  var numericCharacters = confirm(
    "Your password will include Numeric Characters."
  );
  console.log(numericCharacters);
  var lowerCaseCharacters = confirm(
    "Your password will include Lower Case Characters."
  );
  console.log(lowerCaseCharacters);
  var upperCaseCharacters = confirm(
    "Your password will include Upper Case Characters."
  );
  console.log(upperCaseCharacters);
  var passLength = confirm(
    "Your password will be between 8 -128 Characters."
  );
  console.log(passLength);

  // condition for the length of password, if password is not longer than 8 characters
  var options = [];
  if (specialCharacters === true) {
    options = options.concat(specialChars);
    console.log(options);
  }
  if (numericCharacters === true) {
    options = options.concat(numericChars);
    console.log(options);
  }
  if (lowerCaseCharacters === true) {
    options = options.concat(lowerCase);
    console.log(options);
  }
  if (upperCaseCharacters === true) {
    options = options.concat(upperCase);
    console.log(options);
  }
  if (passLength === true) {
    options = options.concat(length);
    console.log(options);
  }
}

function buildPassword() {
    //Build chars variable based on desired characters
var chars = "";
    
var passwordLength = length;
var password = "";

for (var i=0; i<passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber+1);
}document.getElementById("password").value = password
}


//new variable for final password
//loop thru options array and use .random to pick random indexes from it
//push random selected character into another array that will need to be defined
//return the final password .join
//couple of conditionals to fill in criteria

// var  = {
//   special: getRandomSpecial,
//   numeric: getRandomNumeric,
//   lower: getRandomLower,
//   upper: getRandomUpper,

// };

// function getRandomSpecial() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", getPassword);
