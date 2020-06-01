// get user input from DOM
// const generateBtn = document.querySelector('#generate');
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
document.getElementById('slider').value = 8;
// object with all functions inside

let passPackage  = {
  lower: getLowers,
  upper: getUppers,
  num: getNumbers,
  spChar: getSymbols
};
function generatePassword () {
  let lenChoice = parseInt(sliderEL.value);
  let includeUp = upperEL.checked;
  let includelow = lowerEL.checked;
  let includeNum = numberEL.checked;
  let includeSpec = specialEL.checked;
 console.log(includeUp, includelow, includeNum, includeSpec);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}


// upper case letters included in password randow function user choices
function getLowers(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUppers(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} 
function getSymbols() {
  let specialChar = '!@#$%^&*(){}[]=<>/';
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword()); 
document.querySelector('#generate').addEventListener('click', generatePassword());


