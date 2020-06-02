// get user input from DOM

let generateBtn = document.getElementById('generate');
let passwordEL = document.querySelector('#password');
let lowerEL = document.querySelector('#inlineCheckbox1');
let upperEL = document.querySelector('#inlineCheckbox2');
let numberEL = document.querySelector('#inlineCheckbox3');
let specialEL = document.querySelector('#inlineCheckbox4');
let sliderEL = document.querySelector('#slider');

// slider function for length of password

function sliderChange(val) {
  document.getElementById('output').innerHTML = val;
}
document.getElementById('slider').value = ' ';

// object with all functions inside

let passPackage = {
  lower: getLowers,
  upper: getUppers,
  num: getNumbers,
  spChar: getSymbols
};

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);

// check boolean values of user criteria and slider length of password value pass into generate password function 

function writePassword() {
  const includelow = lowerEL.checked;
  const includeUp = upperEL.checked;
  const includeNum = numberEL.checked;
  const includeSpec = specialEL.checked;
  const lenChoice = parseInt(sliderEL.value);
  passwordEL.innerText = generatePassword(includelow, includeUp, includeNum, includeSpec, lenChoice);
}
//generate password using User choice criteria

function generatePassword(lower, upper, num, spChar, lenChoice) {
  event.preventDefault();

  // password append variable start

  let passwordText = ' ';

  //Checked values for lower upper number and special character

  const checkedCount = lower + upper + num + spChar;

  // create an array of objects for the checkboxes boolean values and filter (array method) objects for false checkboxes

  const charsArr = [{ lower }, { upper }, { num }, { spChar }].filter(choices => Object.values(choices)[0]);

  //no password generated if boxes unchecked

  if (checkedCount <= 0) {
    return ' ';
  }

  // for loop to run the length of password

  for (let i = 0; i < lenChoice; i += checkedCount) {

    // for each loop checkbox object block and append passwordText

    charsArr.forEach(checkBx => {

      const funcName = Object.keys(checkBx)[0];

      passwordText += passPackage[funcName]();
    });
  }

  // final appended password passed into variable for return of generatePassword function

  const generatedPass = passwordText;

  return generatedPass;

}


// returning random characters from CharCode into function of user choices Upper case, Lower case, Numbers 

function getLowers() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUppers() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// return random special characters function 

function getSymbols() {
  let specialChar = '!@#$%^&*(){}[]=<>/';
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}






