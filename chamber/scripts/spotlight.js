const cards = document.querySelector('#spotlightCard');

async function getMemberData() {
    const url = 'data/members.json';
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver'));
}
  
getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h3'); // Use 'h3' for the full name
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership_level = document.createElement('p');

        // Build the h3 content out to show the Company Name
        name.textContent = `${member.name}`;
        // Phone Number
        phone.textContent = `${member.phone}`;
        // Website
        website.textContent = `${member.website}`;
        // Membership Level
        membership_level.textContent = `${member.membership_level}`;

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership_level);

        cards.appendChild(card);
    });
}