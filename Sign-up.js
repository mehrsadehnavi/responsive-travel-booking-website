const form = document.getElementById('register-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const phoneNumberInput = document.getElementById('phone-number');
  const emailInput = document.getElementById('email');

  if (
    phoneNumberInput.value.trim() === '' ||
    emailInput.value.trim() === '' ||
    passwordInput.value.trim() === '' ||
    confirmPasswordInput.value.trim() === ''
  ) {
    alert('Please fill in all fields.');
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match!');
    return;
  }

  //const passwordStrength = checkPasswordStrength(passwordInput.value);

  // if (passwordStrength === 'weak') {
  //   alert('Password is weak. Please choose a stronger password.');
  //   return;
  // }

  $.ajax({
    url: 'http://127.0.0.1:8000/accounts/register/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      phone_number: phoneNumberInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      c_password: confirmPasswordInput.value,
    }),
    success: function(response) {
      console.log(response);
      // Display success message to the user
      //messageDiv.textContent = 'Registration successful!';
      window.location.href = 'Sign-in.html';
      // Handle the successful response here
    },
    error: function(xhr, status, error) {
      console.error(xhr.responseText);
      // Display error message to the user
      //messageDiv.textContent = 'Registration error: ' + xhr.responseText;
      // Handle the error response here
    }
  });
});

/* function checkPasswordStrength(password) {
  //const hasNumber = /\d/.test(password);
  //const hasLetter = /[a-zA-Z]/.test(password);
  //const hasSpecialChar = /[!@#$%^&*]/.test(password);
  //const consecutiveLetters = /(abcdefghijklmnopqrstuvwxyz)|(ABCDEFGHIJKLMNOPQRSTUVWXYZ)/.test(password);
  const isShort = password.length < 6;

  if (isShort || !hasNumber || !hasLetter || !hasSpecialChar || consecutiveLetters) {
    return 'weak';
  }

  return 'strong';
} */