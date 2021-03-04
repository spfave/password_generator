// Set available password characters
const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "012346789".split("");
const symbols = "`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?".split("");

// Functions
function configurePassword() {
  const includeLettersLower = confirm(
    "Include lower case letters in your password?"
  );
  const includeLettersUpper = confirm(
    "Include upper case letters in your password?"
  );
  const includeNumbers = confirm("Include numbers in your password?");
  const includeSymbols = confirm("Include symbols in your password?");

  if (
    !includeLettersLower &&
    !includeLettersUpper &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert(
      "Must select at least 1 password character type to generate a password."
    );
    configurePassword();
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
generateBtn.addEventListener("click", configurePassword);
