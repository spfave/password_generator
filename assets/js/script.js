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
  const pwCharTypes = configPasswordCharacters();
  const pwLength = configPasswordLength();
  // console.log(pwCharTypes); //test
  // console.log(pwLength); //test

  // Generate password character set
  return generatePasswordText(pwCharTypes, pwLength);
}

// Select character types to include in password
function configPasswordCharacters() {
  const charTypes = [
    { desc: "lower case letters", symb: "l" },
    { desc: "upper case letters", symb: "u" },
    { desc: "numbers", symb: "n" },
    { desc: "symbols", symb: "s" },
  ];
  let pwCharTypes = [];

  for (const charType of charTypes) {
    const includeCharSet = confirm(`Include ${charType.desc} in password`);
    if (includeCharSet) {
      pwCharTypes.push(charType.symb);
    }
  }

  /* 
  Confirm selection of at least 1 character type 
  - if no character types selected: alert user and rerun character type selection prompts
  */
  if (pwCharTypes.length === 0) {
    alert(
      "Must select at least 1 password character type to generate a password"
    );
    pwCharTypes = configPasswordCharacters();
  }

  return pwCharTypes;
}

// Input password character length
function configPasswordLength() {
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

// generatePasswordText();
function generatePasswordText(pwCharTypes, pwLen) {
  // console.log(pwCharTypes);
  // console.log(shuffleArray(pwCharTypes));

  return "test";
}

function randomChoice(array) {
  // Return random choice from input array
  return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
  // Return random shuffle of array
  // Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
