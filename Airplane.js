// // Sample airplane data
// const airplanes = [
//     { name: "Airplane A", photo: "airplane-a.jpg" },
//     { name: "Airplane B", photo: "airplane-b.jpg" },
//     { name: "Airplane C", photo: "airplane-c.jpg" },
//     { name: "Airplane D", photo: "airplane-d.jpg" },
//     { name: "Airplane E", photo: "airplane-e.jpg" },
//     { name: "Airplane F", photo: "airplane-f.jpg" },
//   ];
  
  // Function to dynamically load airplane cards
function loadAirplanes(airplanes) {
    const airplaneCardsContainer = document.getElementById("airplane-cards");
    airplaneCardsContainer.innerHTML = "";
  
    airplanes.forEach((airplane) => {
      const card = document.createElement("div");
      card.classList.add("airplane-card");
  
      const image = document.createElement("img");
      image.src = airplane.photo;
      image.alt = airplane.name;
      card.appendChild(image);
  
      const name = document.createElement("h3");
      name.textContent = airplane.name;
      card.appendChild(name);
  
      // Open airplane details page on click
      card.addEventListener("click", () => {
        window.location.href = "Airplane-details.html";
      });
  
      airplaneCardsContainer.appendChild(card);
    });
  }
  
  // Function to fetch airplane data from a JSON file
  function fetchAirplanesFromJSON() {
    fetch("path/to/airplanes.json")
      .then((response) => response.json())
      .then((data) => {
        loadAirplanes(data); // Assuming the JSON file directly contains an array of airplane objects
      })
      .catch((error) => {
        console.error("Error fetching airplanes from JSON:", error);
      });
  }  
  
  // Function to filter airplanes based on user input
  function filterAirplanes() {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const entryDate = document.getElementById("entry-date").value;
    const exitDate = document.getElementById("exit-date").value;
    const passengers = document.getElementById("passengers").value;
  
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Prepare the request
    xhr.open("POST", "your_backend_url_here");
    xhr.setRequestHeader("Content-Type", "application/json");

    // Define the request payload with entryDate and exitDate
    const payload = {
        entryDate: entryDate,
        exitDate: exitDate
    };

    // Convert the payload to JSON format
    const jsonData = JSON.stringify(payload);

    // Set up the callback function for when the request is complete
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Request successful, do something with the response if needed
            console.log(xhr.responseText);
        } else {
            // Request failed, handle the error
            console.error("Request failed. Status: " + xhr.status);
        }
    };

    // Send the request with the payload
    xhr.send(jsonData);

    loadAirplanes(); // Reload airplanes after filtering
}

    // Add an event listener to the filter button
    const filterButton = document.getElementById("filter-button");
    filterButton.addEventListener("click", filterTrains);  

  // Load airplanes when the page is first loaded
  window.addEventListener("load", loadAirplanes);
  