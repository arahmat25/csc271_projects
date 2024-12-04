var postReviews = 0; 
// Show the amount of posts under review
document.getElementsByClassName('review')[0].textContent = "Posts currently undergoing reviews: " + postReviews;

// Function when users click the submit button
function showAlert(event) {
    // Prevent form submission (this is critical to stop the page refresh)
    event.preventDefault();

    // Get the inputs of the form
    var restaurantName = document.getElementById('rname').value;
    var cuisine = document.getElementById('cuisine').value;
    var contact = document.getElementById('contact').value;
    var location = document.getElementById('location').value;

    // Check if all inputs are filled
    if (!restaurantName || !cuisine || !contact || !location) {
        alert("Please fill in all fields.");
        return; // Prevent further execution
    }

    // If the amount of posts is greater than 45, tell user to try again later
    if(postReviews > 45) {
        alert("We are currently experiencing a high amount of posts. Please try again later.");
        return; // Prevent further execution
    }
    // If posts are at 30 or greater, tell user that it may take a while before posts are uploaded on the website
    else if (postReviews >= 30) {
        alert("We are currently experiencing a high number of posts. Your post may take a while before being posted.");
    } else {
        alert("Hello, your Restaurant: " + restaurantName + " will be reviewed. If the information is correct, we will contact you at: " + contact);
    }

    // Update the number of posts currently under review
    postReviews += 1;
    document.getElementsByClassName('review')[0].textContent = "Posts currently undergoing reviews: " + postReviews;

    // Create a preview for the user to see
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${restaurantName}</td>
        <td>${cuisine}</td>
        <td>${contact}</td>
        <td>${location}</td>
    `;

    // Add the preview to the table already being displayed on the page
    document.querySelector('#previewTable tbody').appendChild(newRow);
}

// Attach the event listener to the form submission
var form = document.getElementById('restForm');
form.addEventListener('submit', showAlert, false);

// Update the homepage link
document.getElementsByTagName("a")[0].textContent = "Homepage";
