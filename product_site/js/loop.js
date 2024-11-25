// array to hold images
var images = [
    { src: 'images/cambodia.webp', url: 'cusine.html' },
    { src: 'images/malaysia.jfif', url: 'cusine.html' },
    { src: 'images/Flag-Philippines.webp', url: 'cusine.html' }
];

function redirect(index) {
    // store the index to know which object to display
    localStorage.setItem('objectIndex', index);
    window.location.href = images[index].url;  // Redirect to the corresponding page
}

// Get elements in imageContainer
var container = document.getElementById('imageContainer');
let currentIndex = 0;

// Loop through each image in the array and create img elements
for (let index = 0; index < images.length; index++) {
    var img = document.createElement('img');
    img.src = images[index].src;
    img.alt = `Image ${index + 1}`;
    img.width = 300;
    img.height = 200;

    // Set the first image as active
    if (index === 0) img.classList.add('active');
    
    // Add event listener to redirect on click
    img.addEventListener('click', function() {
        redirect(index);  // Trigger redirect when image is clicked
    });

    container.appendChild(img);
}

// Function to change the image (carousel behavior)
function changeImage() {
    var imgs = document.querySelectorAll('.image-container img');  // Get all images
    imgs[currentIndex].classList.remove('active');  // Remove 'active' from current image
    currentIndex = (currentIndex + 1) % imgs.length;  // Increment and loop back to 0 after last image
    imgs[currentIndex].classList.add('active');  // Add 'active' to the next image
}

// Set interval to change the image every 3 seconds
setInterval(changeImage, 3000);
