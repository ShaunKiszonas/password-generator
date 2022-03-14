var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!#$%&'()*+-./:;<=>?@[]^_`{|}~";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Assignment code here 
function generatePassword() {
  var passwordLength = window.prompt("How many characters long would you like the password?");
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be a number between 8 and 128");
    generatePassword();
  }

  var hasSpecialChars = window.confirm("Click ok to have special characters")
  var hasUpperCase = window.confirm("Click ok to have uppercase letters")
  var hasLowerCase = window.confirm("Click ok to have lowercase letters")
  var hasNums = window.confirm("Click ok to have numbers?")

  var result = [];
  var possiblePasswordChars = [];

  var passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialChars: hasSpecialChars,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNums: hasNums,
  };

  function selectRandChar(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  if (passwordOptions.hasSpecialChars) {
    var arr = specialChars.split("");
    possiblePasswordChars = possiblePasswordChars.concat(arr);
    result.push(selectRandChar(arr));
  }
  if (passwordOptions.hasUpperCase) {
    var arr = upperCaseChars.split("");
    possiblePasswordChars = possiblePasswordChars.concat(arr);
    result.push(selectRandChar(arr));
  }
  if (passwordOptions.hasLowerCase) {
    var arr = lowerCaseChars.split("");
    possiblePasswordChars = possiblePasswordChars.concat(arr);
    result.push(selectRandChar(arr));
  }
  if (passwordOptions.hasNums) {
    possiblePasswordChars = possiblePasswordChars.concat(numbers);
    result.push(selectRandChar(numbers));
  }

  var resultLength = result.length;

  for (var i = 0; i < passwordOptions.passwordLength - resultLength; i++) {
    result.push(selectRandChar(possiblePasswordChars));
  }
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
