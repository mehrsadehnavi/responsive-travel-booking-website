

// Function to dynamically load hotel cards
function loadHotels(hotels) {
  const hotelCardsContainer = document.getElementById("hotel-cards");
  hotelCardsContainer.innerHTML = "";

  hotels.forEach((hotel) => {
    const card = document.createElement("div");
    card.classList.add("hotel-card");

    const image = document.createElement("img");
    if (hotel.images.length > 0) {
      image.src = hotel.images[0].image; // Use the first image of the hotel
      image.alt = hotel.name;
    } else {
      image.src = "Hotel2.jpg"; // Use a default image if the hotel has no images
      image.alt = "No image available";
    }
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = hotel.name;
    card.appendChild(name);

    // Open hotel details page on click
  card.addEventListener("click", () => {
    // Save the hotel ID to local storage
    localStorage.setItem("selectedHotelId", hotel.id);

    // Redirect to the hotel details page
    window.location.href = "Hotel-details.html";
  });

    hotelCardsContainer.appendChild(card);
  });
}

// Function to fetch hotel data from a Django Rest Framework backend using AJAX
function fetchHotelsFromBackend() {
  // $.ajax({
  //   url: "http://127.0.0.1:8000/hotels/list/",
  //   type: "GET",
  //   contentType: 'application/json',
  //   headers: {
  //       'Authorization': 'Bearer ' + localStorage.getItem('access'),
  //   },
  //   success: function (data) {
  //     loadHotels(data);
  //   },
  //   error: function (xhr, status, error) {
  //     console.error("Error fetching hotels from backend:", error);
  //   },
  // });
  // Sample hotel data
  // const hotels = [
  // { name: "Hotel A", photo: "Hotel2.jpg" },
  // { name: "Hotel B", photo: "Hotel2.jpg" },
  // { name: "Hotel C", photo: "Hotel2.jpg" },
  // { name: "Hotel D", photo: "Hotel2.jpg" },
  // { name: "Hotel E", photo: "Hotel2.jpg" },
  // { name: "Hotel F", photo: "Hotel2.jpg" },
  // ];
  // loadHotels(hotels); // Load the sample hotel data
}

// Function to filter hotels based on user input
function filterHotels() {
  const city = document.getElementById("city").value;
  const entryDate = document.getElementById("entry-date").value;
  const exitDate = document.getElementById("exit-date").value;
  const passengers = document.getElementById("passengers").value;

  // Filtering logic goes here...

  sendFilterDataToBackend(entryDate, exitDate); // Send the filter data to the backend

  loadHotels(); // Reload hotels after filtering
}

// Function to send filter data to the backend using AJAX
function sendFilterDataToBackend(entryDate, exitDate) {
  $.ajax({
    url: "your-backend-api-url",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      entryDate: entryDate,
      exitDate: exitDate,
    }),
    success: function (data) {
      console.log("Request successful");
    },
    error: function (xhr, status, error) {
      console.error("Request failed");
    },
  });
}

// Load hotels when the page is first loaded
$(document).ready(function () {
  fetchHotelsFromBackend();
});

// // Add event listener to the filter button
// const filterButton = document.getElementById("filter-button");
// filterButton.addEventListener("click", filterHotels);

// Get the entry date and exit date values from the input fields
var entryDate = document.getElementById("entry-date").value;
var exitDate = document.getElementById("exit-date").value;

// Store the values in localStorage
localStorage.setItem("entryDate", entryDate);
localStorage.setItem("exitDate", exitDate);