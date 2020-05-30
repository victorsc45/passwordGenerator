// get user input from DOM
const resultEL = document.getElementById('result');

// object with all functions inside

let passPackage  = {
  lower: getLowers,
  upper: getUppers,
  num: getNumbers,
  spChar: getSymbols
};

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
  const specialChar = "!@#$%^&*(){}[]=<>/";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}
// slider function for length of password

function sliderChange(val) {
  document.getElementById('output').innerHTML = val;
}
document.getElementById('slider').value = 8;

// radio buttons unchecked default
// const radioBtns = document.querySelector("reset");
document.getElementById("reset").onclick()
{
  document.getElementsByName("optradio1").checked = false;
  document.getElementsByName("optradio2").checked = false;
  document.getElementsByName("optradio3").checked = false;
  document.getElementsByName("optradio4").checked = false;
}
// radioBtns.addEventListener("onclick", resetRadio());
// Assignment Code original
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);