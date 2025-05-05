function showweatherDetails(event){
    event.preventDefault();

const city = document.getElementById("city").value;
const apiKey = "";//Add KEY
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                 <p>Temperature: ${data.main.temp} &#8451</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
    })

    .catch(function(error) {
        console.error("Error fetching weather:", error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

function createLatitudeDiv(){
    const weatherInfo = document.getElementById("weatherInfo");
    const latitudeDiv = document.createElement("div");
    latitudeDiv.id = "weatherInfoLatitude"
    weatherInfo.insertAdjacentElement("afterend", latitudeDiv);
}

function weatherCoordinates(event){
    event.preventDefault();

const latitude = document.getElementById("latitude").value;
const longitude = document.getElementById("longitude").value;
const apiKey = "";//Add KEY
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

fetch(apiURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    const latitudeDiv = document.getElementById("weatherInfoLatitude");
    latitudeDiv.innerHTML = `<h2>Weather in ${data.name}</h2>
                             <p>Temperature: ${data.main.temp} &#8451</p>
                             <p>Weather: ${data.weather[0].description}</p>`
})

.catch(function(error) {
    console.error("Error fetching weather:", error);
    const latitudeDiv = document.getElementById("weatherInfoLatitude");
    latitudeDiv.innerHTML = `<p>Failed to fetch weather. Please try again with correct coordinates.</p>`;
});

}

createLatitudeDiv();
document.getElementById("weatherForm").addEventListener("submit", showweatherDetails);
document.getElementById("weatherFormLatitude").addEventListener("submit", weatherCoordinates);
