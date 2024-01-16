//onclick on loader
loaderClick = function () {
    alert("hey 👋🏻, Thanks for visiting the site ❤️")
}
insta = function () {
    // window.location.href = "https://t.me/sanju_petwal";
    window.open('https://www.instagram.com/sanju.petwal', '_blank');
}


// Example using the Quotable API
const apiUrl = "https://api.quotable.io/random?tags=motivational";

let quote = document.getElementsByClassName("card__description")[0];
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data && data.content) {
            quote.innerHTML = data.content;
            console.log(data.content);

        } else {
            console.log("Unable to fetch a quote at the moment.");
        }
    })
    .catch(error => {
        console.error("Error fetching quote:", error);
    });


// view count local 
// Function to update and display the visit count
function updateVisitCount() {
    // Check if localStorage is supported
    if (typeof (Storage) !== "undefined") {
        // Retrieve the current visit count or set it to 0 if not present
        let visitCount = localStorage.getItem("visitCount") || 0;

        // Increment the visit count
        visitCount++;

        // Update the count in local storage
        localStorage.setItem("visitCount", visitCount);

        // Display the visit count on the page
        document.querySelector('.visited_count').textContent = visitCount;
    } else {
        // Browser doesn't support local storage
        document.querySelector('.visited_count').textContent = "N/A";
    }
}

// Call the updateVisitCount function when the page loads
window.onload = updateVisitCount;


// click 
document.addEventListener('DOMContentLoaded', function () {
    const blinkElement = document.querySelector('.blink');

    setInterval(function () {
      blinkElement.style.visibility = (blinkElement.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, 600);
  });