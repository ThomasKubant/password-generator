// Assignment code here
var lowerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '.', '?', '`', '~'];
var generatePassword = function() {
  var password = "";
  do {
    var passwordLength = prompt("How many characters in your password?");
    if(isNaN(passwordLength)) {
      alert('Please enter a valid number.');
    }
  } while (isNaN(passwordLength));
  var lowercaseCheck = confirm("Do you want to include lowercase letters?");
  var uppercaseCheck = confirm("Do you want to include uppercase letters?");
  var numberCheck = confirm("Do you want to include numbers?");
  var specialCheck = confirm("Do you want to include special characters?");
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
