// // Set the background image.
// fetch('http://example.com/background-image.jpg')
//   .then(response => response.blob())
//   .then(blob => {
//     const objectURL = URL.createObjectURL(blob);
//     document.body.style.backgroundImage = `url(${objectURL})`;
//     document.body.style.backdropFilter = 'blur(5px)';
//     document.body.style.webkitBackdropFilter = 'blur(5px)';
//   });

// Get the hotel data from the API and update the HTML.
$(document).ready(function() {
  // Get the selected hotel ID from the query string
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const selectedHotelId = localStorage.getItem('selectedHotelId');

  // Define the API endpoint URL
  const apiUrl = `http://127.0.0.1:8000/hotels/get/${selectedHotelId}/`;

  // Send the AJAX request using jQuery
  $.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access'),
    },
    success: function(data) {
      // Update the HTML with the retrieved hotel data
      document.getElementById('hotel-name').textContent = data.name;
      document.getElementById('hotel-address').textContent = data.address;
      document.getElementById('hotel-stars').innerHTML = getStarRating(data.stars);
      document.getElementById('hotel-facilities').textContent = data.features;
    },
    error: function(xhr, status, error) {
      console.error('Error fetching hotel data:', error);
    }
  });

  const reserveButton = document.getElementById('reserve-button');
  reserveButton.addEventListener('click', () => {
    window.location.href = `Hotel-submit.html?hotel_id=${selectedHotelId}`;
  });
});

function getStarRating(stars) {
  const starIcons = '<span class="star">★</span>'.repeat(stars);
  return starIcons;
}