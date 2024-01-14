const Year = document.querySelector('#today1');

const options = {
    year: "numeric"
  };

Year.innerHTML = new Date().toLocaleDateString("en-US", options);