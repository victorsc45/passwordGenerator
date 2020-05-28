// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  //possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy1234567890!@#$%^&*()-_=";
  passwordText.values = password;
 // create loop to create password
  for(let i=0; i <= 30; i++) {
    generatePassword.values[i].charAt(math.floor(math.random() * math.floor(values.length -1)));
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
