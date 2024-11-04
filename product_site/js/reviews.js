var reviews = [
    "Its very goood",
    "The food is alright",
    "The pho is really good",
];


var reviewsElement = document.querySelector('#test');
var reviewsText = '';

for (var i = 0; i < reviews.length; i++) {
    reviewsText += reviews[i] + '<br>';    }

reviewsElement.innerHTML = reviewsText;