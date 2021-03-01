// Array of special characters to be included in password
var special = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var finalPassword = document.getElementById("password");
var length = 10;

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
  var passwordLength = confirm(
    "Your password will be between 8 -128 Characters."
  );
  console.log(passwordLength);

  // condition for the length of password, if password is not longer than 8 characters
  var options = [];
  if (specialCharacters === true) {
    options = options.concat(special);
    console.log(options);
  }
  if (numericCharacters === true) {
    options = options.concat(numeric);
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
  if (passwordLength === true) {
    options = options.concat(length);
    console.log(options);
  }
}

function getPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><,./:{}[]";
var passwordLength = 8;
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
