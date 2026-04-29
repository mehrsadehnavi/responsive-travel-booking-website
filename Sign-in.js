const emailPhoneInput = document.querySelector('#inputEmailPhone');
const passwordInput = document.querySelector('#inputPassword');
const typeSelect = document.querySelector('#inputType');
const messageDiv = document.querySelector('#message');

document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Check if email/phone number and password are entered
  if (!emailPhoneInput.value.trim() || !passwordInput.value.trim()) {
    alert('Please enter both email/phone number and password.');
    return;
  }

  $.ajax({
    url: 'http://127.0.0.1:8000/accounts/token/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      phone_number: emailPhoneInput.value,
      password: passwordInput.value,
    }),
    success: function(response) {
      console.log(response);
      // Display success message to the user
      //messageDiv.textContent = 'Registration successful!';
      localStorage.setItem('access', response.access);
      localStorage.setItem('refresh', response.refresh);

      window.location.href = 'Home.html';
      // Handle the successful response here
    },
    error: function(xhr, status, error) {
      console.error(xhr.responseText);
      // Display error message to the user
      //messageDiv.textContent = 'Registration error: ' + xhr.responseText;
      // Handle the error response here
    }
  });

  // Clear inputs
  emailPhoneInput.value = '';
  passwordInput.value = '';

});