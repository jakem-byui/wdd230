cards = document.querySelector('#weatherAPI');

async function getWeatherData() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&appid=a2d6b5bc3191728a2557f2c88e234bd1';
    const response = await fetch(url);
    const data = await response.json();
    // Trier, GE lat, long 49.74, 6.63
    displayWeather(data.weather);
    // note that we reference the prophets array of the JSON data object, not just the object
}
  
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Use 'h2' for the full name
        let birthdate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Birthdate
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Birth Place
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}