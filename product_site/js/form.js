var inputName = document.getElementById('rname');
var cuisineInput = document.getElementById('cuisine'); 
var contactInput = document.getElementById('contact');
var feed = document.getElementById('feedback');


function foucs1(){
    feed.innerHTML = "Please enter your resturant name";
    
}

function blur1(){
    var nameInput = document.getElementById('rname');
    if (nameInput == ""){
        feed.innerHTML = "There is no resturant name submitted";
    }
    else{
        feed.innerHTML = "";
    }
}

function focus2(){
    feed.innerHTML = "Please enter the cusine served at your resturant";

}

function blur2(){
    var cuisineInput = document.getElementById('cuisine');
    if (cuisineInput == ""){
        feed.innerHTML = "There is no cuisine name submitted";
    }
    else{
        feed.innerHTML = "";
    }
    
}

function focus3(){
    feed.innerHTML = "Please enter your resturant's contact infomation in the form of: XXX-XXX-XXXX";
}

function blur3(){
    if (contactInput == ""){
        feed.innerHTML = "There is no contact info submitted";
    }else if(contactInput.value.length != 12){
        feed.innerHTML = "Please format the contact info: XXX-XXX-XXXX"
    }
    else{
        feed.innerHTML = "";
    }

}


inputName.addEventListener('focus',foucs1,);
inputName.addEventListener('blur',blur1,);
cuisineInput.addEventListener('focus',focus2,);
cuisineInput.addEventListener('blur',blur2,);
contactInput.addEventListener('focus',focus3,);
contactInput.addEventListener('blur',blur3,);