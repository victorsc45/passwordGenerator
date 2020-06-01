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

let passPackage  = {
  lower: getLowers,
  upper: getUppers,
  num: getNumbers,
  spChar: getSymbols
};
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function writePassword() {
  const includelow = lowerEL.checked;
  const includeUp = upperEL.checked;
  const includeNum = numberEL.checked;
  const includeSpec = specialEL.checked;
  const lenChoice = parseInt(sliderEL.value);
  passwordEL.innerText = generatePassword(includelow, includeUp,  includeNum, includeSpec, lenChoice);
}
//generate password
function generatePassword(lower, upper, num, spChar, lenChoice) {
  event.preventDefault();
  // password var start
  let passwordText = ' ';
  //Checked values for lower upper number and special character
  const typesCount = lower + upper + num + spChar;
  console.log('numOfChecked:  ', typesCount);
  console.log(lenChoice);
  // create an array of objects for the checkboxes boolen values and filter (array method) objects for false checkboxes
  const typesArr = [{lower}, {upper}, {num}, {spChar}].filter(item => Object.values(item)[0]);
  console.log('Array of choices: ', typesArr);
  //no password generated if boxes unchecked
  if (typesCount <= 0) {
    return  ' ';
  }

  for( let i =0; i < lenChoice; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcname: ', funcName);
      passwordText += passPackage[funcName]();
    });
  }
  
    const generatedPass = passwordText;
    return generatedPass;
 
  }



// Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
  
// }


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






