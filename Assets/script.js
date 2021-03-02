//link the slider with the number inside the box on the right
//This is saying the var is equal to the  id that is pulling from the HTML
var charAmountRange = document.getElementById("charAmountRange");
var charAmountNum = document.getElementById("charAmountNum");

var includelowercaseElement = document.getElementById("includelowercase");
var includeuppercaseElement = document.getElementById("includeuppercase");
var includenumbersElement = document.getElementById("includenumbers");
var includesymbolsElement = document.getElementById("includesymbols");

var form = document.getElementById("passwordGeneratorForm");
var passwordDisplay = document.getElementById("passwordDisplay");

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47);

//this is an event listener, any time the input changes it is
//calling the exact same function for the amount and range
charAmountNum.addEventListener("input", synccharAmount);
charAmountRange.addEventListener("input", synccharAmount);

//add event listener to listen for submit event, and the function will
//prevent the form from submitting and refreshing the page(preventing default)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //To tell the function the boxes have been checked or not
  var characterAmount = charAmountNum.value;
  var includelowercase = includelowercaseElement.checked;
  var includeuppercase = includeuppercaseElement.checked;
  var includenumbers = includenumbersElement.checked;
  var includesymbols = includesymbolsElement.checked;
  //want to get a password variable from the function where the character amount
  //will take the info from the labels

  //This is the code to generate password using the ASCII character sheet
  var password = generatePassword(characterAmount,includelowercase,includeuppercase,
    includenumbers,includesymbols)
  passwordDisplay.innerText = password
})
  
  function generatePassword(characterAmount, includelowercase,includeuppercase,
    includenumbers,includesymbols) {
        
  //set the value to lowercasecharcodes and will include the rest with concat
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeuppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includenumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includesymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
var passwordCharacters=[]
  for(let i = 0; i < characterAmount; i++) {
      //picking a random number between zero and out characterAmount
      //Math.floor makes it into an interger
      var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
passwordCharacters.push(String.fromCharCode(characterCode))
  }
  //can return password characters and will turn into string
  return passwordCharacters.join("")
}


//This is the function to generate an array for the program

function arrayFromLowToHigh(low, high) {
  //For loop will help determine the the variable is starting at low, is less than or equal
  //to high, and will increase by one till it reaches the high
  var array = [];
  for (let i = low; i <= high; i++) {
    //this is the push method that adds one or more to the end of an array
    array.push(i);
  }
  return array;
}

//This is the function that is telling that the event argument is equal to the var
//when the slider changes the number inside the box changes with it
function synccharAmount(e) {
  var value = e.target.value;
  charAmountNum.value = value;
  charAmountRange.value = value;
}