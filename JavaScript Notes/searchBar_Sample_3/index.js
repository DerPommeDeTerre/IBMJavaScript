const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const timeResult = document.getElementById("localTime");
const searchResult = document.getElementById("searchResult");


let travelData = [];
let inputData = "";
let clockInterval = null;

//Function to retrieve data
function retrieveData(){

    fetch("travel_recommendation_api.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        travelData = data;
    })
    .catch(function(error){
        console.log("Data not received", error);
    })
}
//Retrieve function can also be done like this:
// async function retrieveData(){
//     try{
//         const response = await fetch("travel_recommendation_api.json");
//         const data = await response.json();
//         travelData = data;
//     } catch(error) {
//         console.log("Data not received", error);
//     }
// }

retrieveData();
//Function to read users' data
function readInput(){
    searchInput.addEventListener("keyup", function(event){
        inputData = event.target.value.toLowerCase().trim();

        console.log(inputData);
        stopClock();
        timeResult.innerHTML = "";

        if(inputData.length > 0){
            searchResult.innerHTML = "";
        }
    })
}
readInput();
clickButton();

//Event listener for the button and search input
function clickButton(){
    searchBtn.addEventListener("click", function(){
        handleSearch();
    })

    searchInput.addEventListener("keyup", function(event){
        if(event.key === "Enter"){
        handleSearch();
        }
    })
}

//Function to handle search
function handleSearch(){

    if(inputData === ""){ //Validates the input data
        searchResult.innerHTML = "Please, enter a search term.";//
        stopClock();
        timeResult.innerHTML = "";
    } else {
        searchResult.innerHTML = "";
        let results = searchData(inputData); //results stores the resultSearch array from
                                            //searchData function
        //console.log(results);
        setTime(results);
        displayResults(results);
        searchInput.value = "";
        inputData = "";
    }
}

//Function to search data
function searchData(inputData){
    let keyword = inputData;
    let resultSearch = [];

  const countryKeyWord = keyword === "country"||keyword === "countries"

    travelData.countries.forEach(function(country){
        country.cities.forEach(function(city){
            if(city.name.toLowerCase().trim().includes(keyword)||city.description.toLowerCase().trim().includes(keyword)||keyword === "city"||keyword === "cities"||countryKeyWord){
                resultSearch.push({
                    name: city.name,
                    timeZone: city.timeZone,
                    imgUrl: city.imageUrl,
                    description: city.description
                })
            }
        })
    })

    travelData.temples.forEach(function(temple){
        if(temple.name.toLowerCase().trim().includes(keyword)||temple.description.toLowerCase().trim().includes(keyword)||keyword === "temple"||keyword === "temples"||countryKeyWord){
            resultSearch.push({
                name: temple.name,
                timeZone: temple.timeZone,
                imgUrl: temple.imageUrl,
                description: temple.description
            })
        }
    })

    travelData.beaches.forEach(function(beach){
        if(beach.name.toLowerCase().trim().includes(keyword)||beach.description.toLowerCase().trim().includes(keyword)||keyword === "beach"||keyword === "beaches"||countryKeyWord){
            resultSearch.push({
                name: beach.name,
                timeZone: beach.timeZone,
                imgUrl: beach.imageUrl,
                description: beach.description
            })
        }
    })
    return resultSearch;
}

//Function to set time
function setTime(resultsArray){

    stopClock();

    if (resultsArray.length > 0){
        let element = resultsArray[0]
        let timeCode = element.timeZone;
        let placeName = element.name;

        function updateClock(){
            const options = {
                timeZone: `${timeCode}`,
                hour12: true,
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            }
            const currentTime = new Date().toLocaleTimeString('en-US', options);
            let localClock = `Current time in ${placeName} ${currentTime}`
            displayTime(localClock);
            console.log(`Current time in ${placeName}: `, currentTime);
    }
        
        }
        updateClock();
        clockInterval = setInterval(updateClock, 1000);
}

//Function to stop generated clocks
function stopClock(){
    if(clockInterval){
        clearInterval(clockInterval);
        clockInterval = null;
    }
}
//Function to display results
function displayResults(results){
    searchResult.innerHTML = "";

    if(results.length > 0){
        results.forEach(function(item, index){
            searchResult.innerHTML += `
            <div class="resultCard" data-index=${index}>
                <img src="${item.imageUrl}">
                <h3>${item.name}<h3>
                <p>${item.description}</p>
            </div>
            `;
        });
        eventTimeCard(results);
    } else {
        searchResult.innerHTML = "No results found";
    }
}

// Function to display time
function displayTime(timeInPlace){
    timeResult.innerHTML = "";

    if(timeInPlace){
        timeResult.innerHTML = `
        <div id="localTime-container">
        <p id="timeP">${timeInPlace}</p>
        <div>
        `
    };
}
//function to select time zone from results
function eventTimeCard(results){
    const resultCards = document.querySelectorAll(".resultCard");

    resultCards.forEach(function(card){
        card.addEventListener("click", function(){
            const index = this.getAttribute("data-index");
            const selectedItem = results[index];
            setTime([selectedItem]);
        });
    });
}