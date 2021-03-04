// Set available password characters
const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "012346789".split("");
const symbols = "`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?".split("");

// let pwCharType = [];
// let pwLength;

// Functions
function generatePassword() {
  // Configure password generation inputs
  // pwCharTypes = configPasswordCharacters();
  const pwLength = configPasswordLength();
  console.log(pwLength);

  // Generate password character set
  return "test";
}

function configPasswordCharacters() {
  // Select character types to include in password
  const includeLettersLower = confirm(
    "Include lower case letters in your password?"
  );
  const includeLettersUpper = confirm(
    "Include upper case letters in your password?"
  );
  const includeNumbers = confirm("Include numbers in your password?");
  const includeSymbols = confirm("Include symbols in your password?");

  /* 
  Confirm selection of at least 1 character type 
  - if no character types selected: alert user and rerun character type selection prompts
  - if at least 1 character type selected: return list of character type(s) selected
  */
  if (
    !includeLettersLower &&
    !includeLettersUpper &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert(
      "Must select at least 1 password character type from prompts to generate a password"
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

function configPasswordLength() {
  // Input password character length
  const pwLengthInput = prompt("Enter password length");
  const isWNum = /^\d+$/.test(pwLengthInput); // Evaluate if input is only digits (whole number)

  /* 
  Confirm password length input is whole number between [8, 128]
  - if input is not a whole number or input number is not between [8, 128]: alert user and rerun password length input prompt
  */
  let pwLength = Number(pwLengthInput);
  if (!isWNum || pwLength < 8 || pwLength > 128) {
    alert("Enter a whole number between 8 and 128");
    pwLength = configPasswordLength();
  }

  return pwLength;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// DOM Control
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
