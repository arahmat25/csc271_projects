var postReviews = 0; 
//show the amount of post under review
document.getElementsByClassName('review')[0].textContent = "Posts currently undergoing reviews: " +postReviews;
//function when users click the submit button
function showAlert() {
    //get the inputs of the form
    var restaurantName = document.getElementById('rname').value;
    var cuisine = document.getElementById('cuisine').value;
    var contact = document.getElementById('contact').value;
    var location = document.getElementById('location').value;
    
    alert("Hello, your Restaurant: " + restaurantName + " will be reviewed. If the information is correct, we will contact you at: " + contact);
    //add on to the reviews and updates the page
    postReviews += 1;
    document.getElementsByClassName('review')[0].textContent = "Posts currently undergoing reviews: " + postReviews;
    //create a preview for the user to see
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${restaurantName}</td>
        <td>${cuisine}</td>
        <td>${contact}</td>
        <td>${location}</td>
    `;
    //add the preivew to the table already being displayed on the page
    document.querySelector('#previewTable tbody').appendChild(newRow);

    return false; // Prevent form submission and page refresh
}



document.getElementsByTagName("a")[0].textContent="Homepage";
