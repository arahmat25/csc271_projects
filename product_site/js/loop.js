//array to hold images
var images=[
    {src: 'images/cambodia.webp', url:'cusine.html' },
    {src: 'images/malaysia.jfif', url: 'cusine.html'},
    {src: 'images/Flag-Philippines.webp',url: 'cusine.html'}
];

function redirect(index){
    //store the index to know which object to display
    localStorage.setItem('objectIndex',index);
    window.location.href = images[index].url;
    
   
   
}

// get elements in imageContainer
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
    
    // img.addEventListener('click', function() {
    //     redirect(index);
    // });
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
