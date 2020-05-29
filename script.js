// Assignment Code
const generateBtn = document.querySelector("#generate");
disable[generateBtn];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  
  if(document.querySelector("#uppers")){
   let passType = upperValues;
   enable[generateBtn];
 }
 else if(document.querySelector("#lowers")){
   let passType = lowerValues;
   enable[generateBtn];
 }
 else if(document.querySelector("#nums")){
   let passType = numValues;
   enable[generateBtn];
 }
 else  {
   let passType = strongValues;
   enable[generateBtn];
 }
}
  //possible password values
  let strongValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy1234567890!@#$%^&*()-_=";
  let numValues = "1234567890";
  let lowerValues = "abcdefghijklmnopqrstuvwyxz";
  let upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordText.values = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code original
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword(uppers, lowers, nums, strong) {
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);