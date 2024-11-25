function cusine(resturantName,img,location,contact,cuisine){
    this.resturantName = resturantName;
    this.img = img;
    this.location = location;
    this.contact = contact;
    this.cuisine = cuisine;
    this.display = function(){
        document.getElementById('restaurantName').textContent = this.resturantName;
        document.getElementById('restaurantImage').src = this.img;
        document.getElementById('restaurantLocation').textContent = this.location;
        document.getElementById('restaurantContact').textContent = this.contact;
        document.getElementById('restaurantCuisine').textContent = "Cuisine: " + this.cuisine;
    }

}

//creating objects and storing them in an array
var cambodia = new cusine("Four Seasons","images/cambodia.webp","716 Public St #1625, Providence, RI 02907","401-299-9999","Cambodian");
var malaysia = new cusine("Maha Heng","images/malaysia.jfif","165 Angell St, Providence, RI 02906","(401) 228-9555","Malaysian");
var philippines = new cusine("Area Restaurant & Lounge","images/Flag-Philippines.webp","319 Pocasset Ave #4800, Providence, RI 02909","401-603-6439","Fillipino");
var restHold = [cambodia,malaysia,philippines];

function chooser(list){
    //get the object from local storage and call the object's method
    var index = localStorage.getItem('objectIndex');
    var object1 = list[index];
    object1.display();
}
chooser(restHold);