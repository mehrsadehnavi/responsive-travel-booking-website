// // Sample train data
// const trains = [
//     { name: "Train A", photo: "train-a.jpg" },
//     { name: "Train B", photo: "train-b.jpg" },
//     { name: "Train C", photo: "train-c.jpg" },
//     { name: "Train D", photo: "train-d.jpg" },
//     { name: "Train E", photo: "train-e.jpg" },
//     { name: "Train F", photo: "train-f.jpg" },
//   ];
  
 // Function to dynamically load train cards
function loadTrains(trains) {
  const trainCardsContainer = document.getElementById("train-cards");
  trainCardsContainer.innerHTML = "";

  trains.forEach((train) => {
    const card = document.createElement("div");
    card.classList.add("train-card");

    const image = document.createElement("img");
    image.src = train.photo;
    image.alt = train.name;
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = train.name;
    card.appendChild(name);

    // Open train details page on click
    card.addEventListener("click", () => {
      window.location.href = "Train-details.html";
    });

    trainCardsContainer.appendChild(card);
  });
}

// Function to fetch train data from a JSON file
function fetchTrainsFromJSON() {
  fetch("path/to/trains.json")
    .then((response) => response.json())
    .then((data) => {
      loadTrains(data); // Assuming the JSON file directly contains an array of train objects
    })
    .catch((error) => {
      console.error("Error fetching trains from JSON:", error);
    });
}
  
  // Function to filter trains based on user input
  function filterTrains() {
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
      exitDate: exitDate,
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
  
    loadTrains(); // Reload trains after filtering
  }
  
  // Add an event listener to the filter button
  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", filterTrains);

  // Load trains when the page is first loaded
  window.addEventListener("load", loadTrains);
  