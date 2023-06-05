// Get reference to the generate button
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//funciton to generate random password with the criteria 
function generatePassword(){
  const length = prompt('Enter the desired length of the password (between 8 and 128 characters):');
  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumeric = confirm('Include numeric characters?');
  const includeSpecial = confirm('Include special characters?');

  // Validate password length
  if (length < 8 || length > 128) {
    alert('Sorry, but choose a length at start.');
    return;
  }

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('Select at least one character type...');
    return;
  }
  
   // Define character sets based on selected criteria
   const lowercaseCharset = 'abcdefghijklmnopqrstuvwxyz';
   const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const numericCharset = '0123456789';
   const specialCharset = '!@#$%^&*()-_=+';
 
   let charset = '';
   if (includeLowercase) {
     charset += lowercaseCharset;
   }
   if (includeUppercase) {
     charset += uppercaseCharset;
   }
   if (includeNumeric) {
     charset += numericCharset;
   }
   if (includeSpecial) {
     charset += specialCharset;
   }
 
   // Generate the password
   let password = '';
   for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * charset.length);
     password += charset[randomIndex];
   }
 
   document.getElementById("password").value = password;
  // Display the password in an alert
  alert("Generated Password:\n" + password);

}



