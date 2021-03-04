// Set available password characters
const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "012346789".split("");
const symbols = "`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?".split("");

// Functions
// Configure password generation inputs
function configPassword() {
  let includeLettersLower, includeLettersUpper, includeNumbers, includeSymbols;

  configPasswordCharacters();
}

function configPasswordCharacters() {
  // Select character types to include
  includeLettersLower = confirm("Include lower case letters in your password?");
  includeLettersUpper = confirm("Include upper case letters in your password?");
  includeNumbers = confirm("Include numbers in your password?");
  includeSymbols = confirm("Include symbols in your password?");

  // Confirm selection of at least 1 character type
  if (
    !includeLettersLower &&
    !includeLettersUpper &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert(
      "Must select at least 1 password character type to generate a password."
    );
    configPasswordCharacters();
  }
}

// Write password to the #password input
function writePassword() {
  const password = "test"; //generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// DOM Control
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", configPassword);
