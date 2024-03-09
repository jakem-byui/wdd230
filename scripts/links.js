// const baseURL = "https://jakem-byui.github.io/wdd230/";

// const linksURL = "https://jakem-byui.github.io/wdd230/data/links.json";

const linksURL = "data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    // displayLinks(data);
}
  
getLinks();



// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {

//     });
// }