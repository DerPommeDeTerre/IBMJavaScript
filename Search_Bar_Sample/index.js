// Get the search input element from the DOM
const searchInput = document.getElementById("searchInput");

// Variable to hold the travel data
let placesData = null;

// Function to retrieve data from the JSON file
function retrieveData() {
    fetch("travel_recommendation_api.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            placesData = data;
        })
        .catch(function (error) {
            console.error("Failed to load travel data", error);
        });
}

retrieveData();

// Event listener for user input
searchInput.addEventListener("keyup", function (event) {
    const inputData = event.target.value.toLowerCase();

    if (placesData) {
        const results = filterData(inputData);
        displayData(results);
    } else {
        console.log("Data is not loaded yet");
    }

    if (inputData.trim() === ""){
        displayData([null]);
        return;
    }
});

// Filter the data based on input
function filterData(inputData) {
    let filteredResults = [];

    placesData.countries.forEach(function (country) {
        if (inputData === "country" || country.name.toLowerCase().includes(inputData)) {
            filteredResults.push({
                type: "Country",
                name: country.name,
                description: "Explore the beauty of " + country.name,
                imageUrl: "" // No image in original data
            });
        }

        country.cities.forEach(function (city) {
            if (
                inputData === "city" ||
                city.name.toLowerCase().includes(inputData) ||
                city.description.toLowerCase().includes(inputData)
            ) {
                filteredResults.push({
                    type: "City",
                    name: city.name,
                    description: city.description,
                    imageUrl: city.imageUrl
                });
            }
        });
    });

    placesData.temples.forEach(function (temple) {
        if (
            inputData === "temple" ||
            temple.name.toLowerCase().includes(inputData) ||
            temple.description.toLowerCase().includes(inputData)
        ) {
            filteredResults.push({
                type: "Temple",
                name: temple.name,
                description: temple.description,
                imageUrl: temple.imageUrl
            });
        }
    });

    placesData.beaches.forEach(function (beach) {
        if (
            inputData === "beach" ||
            beach.name.toLowerCase().includes(inputData) ||
            beach.description.toLowerCase().includes(inputData)
        ) {
            filteredResults.push({
                type: "Beach",
                name: beach.name,
                description: beach.description,
                imageUrl: beach.imageUrl
            });
        }
    });

    return filteredResults;
}

// Display the results on the page
function displayData(results) {
    const outputList = document.getElementById("outputList");
    outputList.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        outputList.innerHTML = "<li>No matches found.</li>";
        return;
    }

    results.forEach(function (item) {
        const listItem = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = `${item.type}: ${item.name}`;

        const description = document.createElement("p");
        description.textContent = item.description;

        listItem.appendChild(title);
        listItem.appendChild(description);

        if (item.imageUrl) {
            const img = document.createElement("img");
            img.src = item.imageUrl;
            img.alt = item.name;
            img.style.width = "200px";
            img.style.borderRadius = "10px";
            img.style.marginTop = "10px";
            listItem.appendChild(img);
        }

        listItem.style.marginBottom = "20px";
        outputList.appendChild(listItem);
    });
}
