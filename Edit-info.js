// const emailInput = document.getElementById('email');
// const phoneInput = document.getElementById('phone');
// const fullnameInput = document.getElementById('fullname');
// const addressInput = document.getElementById('address');
// const dobInput = document.getElementById('dob');

// $(document).ready(function() {
//    // Make an AJAX request to the backend API to get the user data
//    $.ajax({
//       url: 'http://127.0.0.1:8000/accounts/account/',
//       type: 'GET',
//       contentType: 'application/json',
//       headers: {
//         'Authorization': 'Bearer ' + localStorage.getItem('access'),
//         // 'Content-Type': 'application/json'
//       },
//       success: function(data) {
//          // Populate form fields with user information
//          $('#email').val(data.email);
//          $('#phone').val(data.phone_number);
//          $('#fullname').val(data.full_name);
//          $('#address').val(data.address);
//          $('#dob').val(data.birthday);
//       },
//       error: function(jqXHR, textStatus, errorThrown) {
//          console.log('Error getting user information: ', errorThrown);
//       }
//    });

//    // Submit the form data to the backend API when the form is submitted
//    $('#user-form').submit(function(event) {
//        // Prevent the form from submitting normally
//        event.preventDefault();

//        // Make an AJAX request to the backend API to submit the form data
//        $.ajax({
//          url: 'http://127.0.0.1:8000/accounts/update/',
//          type: 'PUT',
//          contentType: 'application/json',
//          headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem('access'),
//             // 'Content-Type': 'application/json'
//          },
//          data: JSON.stringify({
//             full_name: fullnameInput.value,
//             email: emailInput.value,
//             phone_number: phoneInput.value,
//             address: addressInput.value,
//             birthday: dobInput.value,
//          }),
//           success: function(response) {
//             console.log(response);
//             // Display success message to the user
//             //messageDiv.textContent = 'Registration successful!';
      
//             window.location.href = 'Home.html';
//             // Handle the successful response here
//           },
//           error: function(jqXHR, textStatus, errorThrown) {
//              console.log('Error updating user information: ', errorThrown);
//           }
//        });
//    });
// });


$(document).ready(function() {
   // Get user information from backend
   $.ajax({
       url: 'http://127.0.0.1:8000/accounts/account/',
       type: 'GET',
       contentType: 'application/json',
       headers: {
           'Authorization': 'Bearer ' + localStorage.getItem('access'),
       },
       success: function(data) {
           // Populate form fields with user information
           $('#email').val(data.email);
           $('#phone').val(data.phone_number);
           $('#fullname').val(data.full_name);
           $('#address').val(data.address);
           $('#dob').val(data.birthday);
       },
       error: function(jqXHR, textStatus, errorThrown) {
           console.log('Error getting user information: ', errorThrown);
       }
   });

   // Submit form data to backend
   $('#user-form').submit(function(event) {
       event.preventDefault();

       var formData = {
           'email': $('#email').val(),
           'phone_number': $('#phone').val(),
           'full_name': $('#fullname').val(),
           'address': $('#address').val(),
           'birthday': $('#dob').val()
       };

       $.ajax({
           url: 'http://127.0.0.1:8000/accounts/update/',
           type: 'PUT',
           contentType: 'application/json',
           headers: {
               'Authorization': 'Bearer ' + localStorage.getItem('access'),
           },
           data: JSON.stringify(formData),
           success: function(response) {
               console.log(response);
               // Handle the successful response here
               window.location.href = 'Home.html';

           },
           error: function(jqXHR, textStatus, errorThrown) {
               console.log('Error updating user information: ', errorThrown);
           }
       });
   });
});