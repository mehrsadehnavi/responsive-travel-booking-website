document.addEventListener("DOMContentLoaded", function() {
  var addBtn = document.getElementById("add-button");
  var submitBtn = document.getElementById("submit-button");
  var formsContainer = document.getElementById("forms-container");
  var formTemplate = document.getElementById("form-template");

  var emptySeats = 5; // Replace with your database value for 'empty_seats'

  addBtn.addEventListener("click", function() {
    if (formsContainer.childElementCount < emptySeats) {
      var newForm = formTemplate.cloneNode(true);
      //newForm.classList.remove("guest-form");
      var buttonsContainer = document.createElement("div");
      buttonsContainer.appendChild(addBtn);
      buttonsContainer.appendChild(submitBtn);
      formsContainer.appendChild(newForm);
      formsContainer.appendChild(buttonsContainer);
    }
  });

  submitBtn.addEventListener("click", function() {
    var forms = document.querySelectorAll(".guest-form");
    var formData = [];

    var digitRegex = /^\d+$/; // Regular expression to match only digits

    forms.forEach(function(form) {
      var nationalId = form.querySelector("#national-id").value;
      var phoneNumber = form.querySelector("#phone-number").value;

      // Check if national ID contains exactly 10 digits
      if (nationalId.length !== 10 || !digitRegex.test(nationalId)) {
        alert("National ID must contain exactly 10 digits.");
        return; // Stop further processing
      }

      // Check if phone number contains exactly 11 digits
      if (phoneNumber.length !== 11 || !digitRegex.test(phoneNumber)) {
        alert("Phone number must contain exactly 11 digits.");
        return; // Stop further processing
      }

      var guest = {
        firstName: form.querySelector("#first-name").value,
        lastName: form.querySelector("#last-name").value,
        gender: form.querySelector("#gender").value,
        dateOfBirth: form.querySelector("#date-of-birth").value, // Get the value of date of birth input
        nationalId: nationalId,
        phoneNumber: phoneNumber
      };

      formData.push(guest);
    });

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/your-backend-endpoint"); // Replace with your backend endpoint URL
    
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Request successful, display success message to the user
          messageDiv.textContent = "Data submitted successfully.";
        } else {
          messageDiv.textContent = "Error submitting data. Please try again later.";
          console.error("Error submitting data. Please try again later.", xhr.status, xhr.statusText);
        }
      }
    };
    
    xhr.send(JSON.stringify(formData));
  });
});
