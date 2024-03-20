// Select the elements from HTML
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('figcaption');

async function getWeatherData() {
    // Fetch weather data from OpenWeatherMap API
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=45.57&lon=122.84&appid=a2d6b5bc3191728a2557f2c88e234bd1';
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
    const currentTemperatureF = Math.round(kelvinToFahrenheit(data.main.temp));
    currentTemp.textContent = `${currentTemperatureF}°F`;

    // Display weather icon
    const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.src = weatherIconUrl;

    // Display weather description
    weatherDescription.textContent = data.weather[0].description;
}

// Call the function to get weather data when the page loads
getWeatherData();