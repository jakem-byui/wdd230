const cards = document.querySelector('#cards');

async function getMemberData() {
    const url = 'data/members.json';
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members);
    // note that we reference the prophets array of the JSON data object, not just the object
}
  
getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2'); // Use 'h2' for the full name
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('p');
        let membership_level = document.createElement('p');
        let additional_info = document.createElement('p');

        // Build the h2 content out to show the Company Name
        name.textContent = `${member.name}`;

        // Address
        address.textContent = `${member.address}`;

        // Phone Number
        phone.textContent = `${member.phone}`;

        // Website
        website.textContent = `${member.website}`;

        // Image Name
        image.textContent = `${member.image}`;

        // Membership Level
        membership_level.textContent = `${member.membership_level}`;

        // Additional Info
        additional_info.textContent = `${member.additional_info}`;

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membership_level);
        card.appendChild(additional_info);

        cards.appendChild(card);
    });
}