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
// example simple look here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{/* <script type="text/javascript">
// Loop 10 times
for (var i = 0; i < 10; i++) {
  // Generate a random number between 1 and 10
  // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
  var num = Math.floor(Math.random() * 10) + 1;

  // Display in console
  console.log(num);
}
</script> */}