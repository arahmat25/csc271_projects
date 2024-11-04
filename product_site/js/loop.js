//array to hold images
var images=[
    'images/cambodia.webp',
    'images/malaysia.jfif',
    'images/Flag-Philippines.webp'
];

// get elements in imageContainer
var container = document.getElementById('imageContainer');
    let currentIndex = 0;

    // Loop through each image in the array and create img elements
    for (let index = 0; index < images.length; index++) {
        var img = document.createElement('img');
        img.src = images[index];
        img.alt = `Image ${index + 1}`;
        img.width = 300;
        img.height = 200;
        if (index === 0) img.classList.add('active'); // Set first image as active
        container.appendChild(img);
    }


    // Function to change the image
    function changeImage() {
        var imgs = document.querySelectorAll('.image-container img');
        imgs[currentIndex].classList.remove('active'); 
        currentIndex = (currentIndex + 1) % imgs.length; 
        imgs[currentIndex].classList.add('active'); 
    }

    
    setInterval(changeImage, 3000);