// Set available password characters
const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "012346789".split("");
const symbols = "`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?".split("");

let pwCharType = [];

// Functions
// Configure password generation inputs
function configPassword() {
  const pwCharTypes = configPasswordCharacters();
  console.log(pwCharTypes); // testing
}

function configPasswordCharacters() {
  // Select character types to include
  const includeLettersLower = confirm(
    "Include lower case letters in your password?"
  );
  const includeLettersUpper = confirm(
    "Include upper case letters in your password?"
  );
  const includeNumbers = confirm("Include numbers in your password?");
  const includeSymbols = confirm("Include symbols in your password?");

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
    pwCharType = configPasswordCharacters();
  } else {
    pwCharType = [];
    if (includeLettersLower) {
      pwCharType.push("l");
    }
    if (includeLettersUpper) {
      pwCharType.push("u");
    }
    if (includeNumbers) {
      pwCharType.push("n");
    }
    if (includeSymbols) {
      pwCharType.push("s");
    }
  }

  return pwCharType;
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
