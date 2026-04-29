//set the background image.
fetch('http://example.com/background-image.jpg')
  .then(response => response.blob())
  .then(blob => {
    const objectURL = URL.createObjectURL(blob);
    document.body.style.backgroundImage = `url(${objectURL})`;
    document.body.style.backdropFilter = 'blur(5px)';
    document.body.style.webkitBackdropFilter = 'blur(5px)';
  });

// Fetch train data when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const data = {
      trainNo: "Train Number",
      trainCapacity: "Train Capacity",
      coupeNo: "Coupe Number",
    };
  
    // Update the HTML with the retrieved train data
    document.getElementById('flight-number').textContent = data.flightNo;
    document.getElementById('terminal-number').textContent = data.terminalNo;
    document.getElementById('max-weight').textContent = data.maxWeight;

    const reserveButton = document.getElementById('reserve-button');
    reserveButton.addEventListener('click', () => {
      window.location.href = 'Train-submit.html';
    });  
  });
  