// Array of special characters to be included in password
var special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPassword(){
    var specialCharacters= confirm ("Do you want your password to contain Special Characters?")
    console.log(specialCharacters)
    var numericCharacters= confirm ("Do you want your password to contain Numeric Characters?")
    console.log(numericCharacters)
    var lowerCaseCharacters= confirm ("Do you want your password to contain Lower Case Characters?")
    console.log(lowerCaseCharacters)
    var upperCaseCharacters= confirm ("Do you want your password to contain Upper Case Characters?")
    console.log(upperCaseCharacters)
    var passwordLength = prompt ("Your password must be at least 8 Characters.")
    console.log(passwordLength)

    // condition for the length of password, if password is not longer than 8 characters
  var options=[]
  if(specialCharacters === true){
      options=options.concat(special)
      console.log(options)
  // }if(specialCharacters === false){
  //   options=options.concat(special)
  //   console.log(options)
  }if(numericCharacters === true){
      options=options.concat(numeric)
      console.log(options)
}if(lowerCaseCharacters === true){
  options=options.concat(lowerCase)
  console.log(options)
}if(upperCaseCharacters === true){
  options=options.concat(upperCase)
  console.log(options)
}}

//new variable for final password
//loop thru options array and use .random to pick random indexes from it
//push random selected character into another array that will need to be defined
//return the final password .join
//couple of conditionals to fill in criteria



// // Assignment Code
var generateBtn = document.querySelector("#generate");




// // Add event listener to generate button
generateBtn.addEventListener("click", getPassword);

