// Define character list object with array of characters for each character type
const charLists = {
  l: "abcdefghijklmnopqrstuvwxyz".split(""), // lowercase letters
  u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), // uppercase letters
  n: "012346789".split(""), // numbers
  s: "`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?".split(""), // symbols
};

// FUNCTIONS
function generatePassword() {
  // Configure password generation inputs
  const pwCharTypes = configPasswordCharacters();
  const pwLength = configPasswordLength();

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

  // Prompt for each character type to include in password
  for (const charType of charTypes) {
    const includeCharSet = confirm(`Include ${charType.desc} in password`);
    if (includeCharSet) {
      pwCharTypes.push(charType.symb);
    }
  }

  /**
   * Confirm selection of at least 1 character type
   * if no character types selected: alert user and rerun character type selection prompts
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
  // Promp for password length
  const pwLengthInput = prompt("Enter password length");
  const isWNum = /^\d+$/.test(pwLengthInput); // Evaluate if input is only digits (whole number)

  /**
   * Confirm password length input is whole number between [8, 128]
   * if input is not a whole number or input number is not between [8, 128]: alert user and rerun password length input prompt
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
  const pwText = [];

  /**
   * To include at least one character of each character type selected to use in password
   * loop over character type selection list and randomly assign a character of that type to the password character set
   */
  for (const pwCharType of pwCharTypes) {
    const rChar = randomChoice(charLists[pwCharType]);
    pwText.push(rChar);
  }

  /**
   * To select characters to fill the password character set to the password length
   * loop over the remaining spaces to fill and randomly select a selected character type and a character of that type
   */
  for (let c = pwCharTypes.length; c < pwLen; c++) {
    const rCharType = randomChoice(pwCharTypes);
    const rChar = randomChoice(charLists[rCharType]);
    pwText.push(rChar);
  }

  // Shuffle password character array and return as joined string
  return shuffleArray(pwText).join("");
}

function randomChoice(array) {
  // Return random choice from input array
  return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
  /**
   * Return random shuffle of array: uses Durstenfeld shuffle (Fisher-Yates) algorithm
   * Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   */
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

// DOM CONTROL
// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", writePassword);

// gitpod test
generateBtn.addEventListener("click", () => {
  console.log('console log from gitpod');
  
  const h1 = document.getElementsByTagName('h1');
  h1[0].textContent = 'Gitpod Test'
});
