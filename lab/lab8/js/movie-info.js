/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var movieInfo = ["Frozen","img/frozen.jpg","4","Elsa gets frozen powers and tweaks out"];

var moreInfo =  document.querySelector('.movie-info');

var title = moreInfo.querySelector('.movie-image');
title.src = movieInfo[1];
title.alt = movieInfo[0];

moreInfo.querySelector('.movie-name').textContent = movieInfo[0];
moreInfo.querySelector('.description').textContent = movieInfo[3];
moreInfo.querySelector('.rating').textContent =  "★ ★ ★ ★ ☆ ";
moreInfo.querySelector('.rating').dataRating = 4;



