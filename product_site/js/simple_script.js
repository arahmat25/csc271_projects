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
    //check if all inputs are filled
    if (!restaurantName || !cuisine || !contact || !location) {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }
    //if the amount of posts is greater than 45, tell user to try again later
    if(postReviews > 45){
        alert("We currently are currently experincing a high amount of posts. Please try again later");
        return false;
    }
    //if posts are at 30 or greater, tell user that it may take awhile before posts are uploaded on website
    else if (postReviews >= 30) {
        alert("We are currently experiencing a high number of posts. Your post may take a while before being posted");
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
    }else if(postReviews < 30){
    
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
}

var form = document.getElementById('restForm');
form.addEventListener('submit',showAlert,);



document.getElementsByTagName("a")[0].textContent="Homepage";


