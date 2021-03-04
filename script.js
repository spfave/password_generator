// Set available password characters
const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "012346789".split("");
const symbols = "`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?".split("");

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = "test"; //generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
