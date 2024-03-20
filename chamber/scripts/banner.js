document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1, ..., Wednesday is 3, ...

    // Check if it's Monday, Tuesday, or Wednesday (1, 2, or 3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById("banner").style.display = "block"; // Show the banner
    } else {
        document.getElementById("banner").style.display = "none"; // Hide the banner
    }

    document.getElementById("closeBanner").addEventListener("click", function() {
        document.getElementById("banner").style.display = "none"; // Hide the banner when the close button is clicked
    });
});