const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const currentTime = document.getElementById("currentTime");

let travelData = [];
let allCountries = [];

//Function to retrieve data
function retrieveData(){
    fetch("travel_recommendation_api.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        travelData =  data;
        allCountries = getCountries(travelData);
        displayCountries(allCountries);
    })
    .catch(function(error){
        console.log("Error loading data", error);
    })
}
retrieveData();
readInput();

//Function to get all the contries names
function getCountries(travelData){
    let allCountries = [];

    let countryName = travelData.countries.map(function(country){
        return country.name.toLowerCase();
    })
    allCountries = allCountries.concat(countryName);

    let countryFromTemples = travelData.temples.map(function(temple){
        return temple.name.split(", ")[1].toLowerCase();
    })
    allCountries = allCountries.concat(countryFromTemples);

    let countryFromBeaches = travelData.beaches.map(function(beach){
        return beach.name.split(", ")[1].toLowerCase();
    })
    allCountries = allCountries.concat(countryFromBeaches);

    let uniqueCountries = [...new Set(allCountries)]

    return uniqueCountries;
}

function displayCountries(allCountries){
    console.log(allCountries);
}

//Function to add an event listener to the input field
function readInput(){
    searchInput.addEventListener("keyup",function(event){
        let inputData = event.target.value.toLowerCase();

        if(allCountries.includes(inputData)){
            displayTime(inputData);
        }
    })
}

//Event listener to display hour function when searching countries

//Function to display time
function displayTime(inputData){

    let placeTime = inputData.trim().toLowerCase();
    let timeZ = null;

    switch (placeTime) {
        case "australia":
            timeZ = "Australia/Sydney";
            break;

        case "japan":
            timeZ = "Asia/Tokyo";
         break;
        
        case "brazil":
            timeZ = "America/Sao_Paulo";
        break;
        
        case "cambodia":
            timeZ = "Asia/Phnom_Penh"
        break;

        case "india":
            timeZ = "Asia/Kolkata"
        break;

        case "frenchpolynesia":
            timeZ = "Pacific/Tahiti"
        break;

        case "polynesia":
            timeZ = "Pacific/Tahiti"
        break;
    
        default:
            console.log("Time Zone not found")
            break;
    }

    const options = {
        timeZone: timeZ,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const localTime = new Date().toLocaleTimeString('en-US', options);
    console.log(`Current time in ${placeTime}: ${localTime}`);
}

// const searchInput = document.getElementById("searchInput");//Links the html elemento to a variable
// const searchResults = document.getElementById("searchResults");

// let travelData = null;
// //Retrieve data from the json file
// function retrieveData(){
//     fetch("travel_recommendation_api.json")
//     .then(function(response){//Converts the response into a json
//         return response.json();
//     })
//     .then(function(data){//Assigns the response to a variable
//         travelData = data;
//     })
//     .catch(function(error){//If data is not loaded, an error will be displayed in the console
//         console.log("Error loading Data", error);
//     })
// }

// retrieveData();//Triggers the data retrieval

// //Event listener for user's input
// searchInput.addEventListener("keyup", function(event){
//     const inputData = event.target.value.toLowerCase();//Stores the input data in a variable

//     if(travelData){//If data exists
//         const results = filterData(inputData);//The filterData function is called to 
//                                               //save the rults in a variable
//         displayResults(results); //Results are displayed on the HTML document
//     } else {
//         console.log("Data is not loaded"); //If there is no data, a message is displayed
//     }

//     if(inputData === ""){ //Id there are no strings on the searchInput
//         results = [null]; //The results will be a null array
//         return;   //This value will be returned
//     }

//     })


//     function filterData(inputData){//This function will work with the user's input data
        
//         let filteredResults = []; //An array will be created with the filtered data
//         const keyword = inputData.trim().toLowerCase();

//         travelData.countries.forEach(function(country){
//             country.cities.forEach(function(city){
//                 if(city.name.toLowerCase().includes(keyword)||city.description.toLowerCase().includes(keyword)||keyword === "city"||keyword === "cities"){
//                     filteredResults.push({
//                         name: city.name,
//                         imageUrl: city.imageUrl,
//                         description: city.description
//                     });
//                 }
//             })
//         });

//         travelData.temples.forEach(function(temple){
//             if(temple.name.toLowerCase().includes(keyword)||temple.description.toLowerCase().includes(keyword)||keyword === "temple"||keyword === "temples"){
//                 filteredResults.push({
//                     name: temple.name,
//                     imageUrl: temple.imageUrl,
//                     description: temple.description
//                 });
//             }
//         });

//         travelData.beaches.forEach(function(beach){
//             if(beach.name.toLowerCase().includes(keyword)||beach.description.toLowerCase().includes(keyword)||keyword === "beach"|| keyword === "beaches"){
//                 filteredResults.push({
//                     name: beach.name,
//                     imageUrl: beach.imageUrl,
//                     description: beach.description
//                 });
//             }
//         });

//         return filteredResults;
//     }
// //Function to display search results
//     function displayResults(results) {
//         searchResults.innerHTML = ""; // Clear old results
    
//         if (results.length> 0) {
//             results.forEach(function(element) {
//                 searchResults.innerHTML += `
//                     <div>
//                         <img src="${element.imageUrl}">
//                         <h3>${element.name}</h3>
//                         <p>${element.description}</p>
//                     </div>
//                 `;
//             });
//         } else {
//             searchResults.innerHTML = "<p>No results found.</p>";
//         }
//     }
// //Function to set time
// function setTime(){
//     const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     const newYorkTime = new Date().toLocaleTimeString('en-US', options);
//     console.log("Current time in New York:", newYorkTime);
// }
// console.log(setTime());