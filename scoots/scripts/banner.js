document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("banner").style.display = "block"; // Show the banner

    document.getElementById("closeBanner").addEventListener("click", function() {
        document.getElementById("banner").style.display = "none"; // Hide the banner when the close button is clicked
    });
});

// Select the elements from HTML
const bannerHigh = document.querySelector('#banner-high');


async function getWeatherData() {
    // Fetch weather data from OpenWeatherMap API
    // 20.448044403105428, -86.90858223057795
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.45&lon=-86.91&appid=a2d6b5bc3191728a2557f2c88e234bd1';
    const response = await fetch(url);
    const data = await response.json();
    
    // Update HTML with weather data
    updateWeather(data);
}

// Function to convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Function to update HTML with weather data
const updateWeather = (data) => {
    // Display current temperature in Fahrenheit
    const currentTemperatureF = Math.round(kelvinToFahrenheit(data.main.temp_max));
    bannerHigh.textContent = `${currentTemperatureF}°F`;
}

// Call the function to get weather data when the page loads
getWeatherData();