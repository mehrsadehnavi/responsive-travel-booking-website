//set the background image.
fetch('http://example.com/background-image.jpg')
  .then(response => response.blob())
  .then(blob => {
    const objectURL = URL.createObjectURL(blob);
    document.body.style.backgroundImage = `url(${objectURL})`;
    document.body.style.backdropFilter = 'blur(5px)';
    document.body.style.webkitBackdropFilter = 'blur(5px)';
  });

  //numbers.
  fetch('http://example.com/flight-info')
  .then(response => response.json())
  .then(data => {
    const flightNumber = data.flight_number;
    const terminalNumber = data.terminal_number;
    const maximumWeight = data.maximum_weight;

    const flightNumberElement = document.getElementById('flight-number');
    const terminalNumberElement = document.getElementById('terminal-number');
    const maximumWeightElement = document.getElementById('max-weight');

    flightNumberElement.textContent = `Flight Number: ${flightNumber}`;
    terminalNumberElement.textContent = `Terminal Number: ${terminalNumber}`;
    maximumWeightElement.textContent = `Maximum Weight: ${maximumWeight}`;
  });


// این یا بالایی؟ اگر بالایی درسته تو قطار هم اضافه کنم.

// Fetch airplane data when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const data = {
      flightNo: "Flight Number",
      terminalNo: "Terminal Number",
      maxWeight: "Maximum Weight",
    };
  
    // Update the HTML with the retrieved airplane data
    document.getElementById('flight-number').textContent = data.flightNo;
    document.getElementById('terminal-number').textContent = data.terminalNo;
    document.getElementById('max-weight').textContent = data.maxWeight;

    const reserveButton = document.getElementById('reserve-button');
    reserveButton.addEventListener('click', () => {
      window.location.href = 'Airplane-submit.html';
    });    
  });
  