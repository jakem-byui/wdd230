// Fetch the JSON file
fetch('data/scoots.json')
  .then(response => response.json())
  .then(data => {
    // Function to create table rows
    function createTableRows(data) {
      var rentalBody = document.getElementById("rentalBody");
      rentalBody.innerHTML = ""; // Clear existing rows

      data.forEach(function(item) {
        var row = document.createElement("tr");

        // Type
        var typeCell = document.createElement("td");
        typeCell.textContent = item.Type;
        row.appendChild(typeCell);

        // Max Persons
        var maxPersonsCell = document.createElement("td");
        maxPersonsCell.textContent = item["Max Persons"];
        row.appendChild(maxPersonsCell);

        // Half Day (Reservation)
        var halfDayReservationCell = document.createElement("td");
        halfDayReservationCell.textContent = item["Half Day (3 hrs)"].Reservation;
        row.appendChild(halfDayReservationCell);

        // Half Day (Walk-In)
        var halfDayWalkInCell = document.createElement("td");
        halfDayWalkInCell.textContent = item["Half Day (3 hrs)"]["Walk-In"];
        row.appendChild(halfDayWalkInCell);

        // Full Day (Reservation)
        var fullDayReservationCell = document.createElement("td");
        fullDayReservationCell.textContent = item["Full Day"].Reservation;
        row.appendChild(fullDayReservationCell);

        // Full Day (Walk-In)
        var fullDayWalkInCell = document.createElement("td");
        fullDayWalkInCell.textContent = item["Full Day"]["Walk-In"];
        row.appendChild(fullDayWalkInCell);

        rentalBody.appendChild(row);
      });
    }

    // Call the function to create table rows with the rental data
    createTableRows(data["Max Rental Pricing"]["Rental Types"]);
  });