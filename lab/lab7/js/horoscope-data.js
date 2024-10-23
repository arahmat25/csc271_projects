//console.log("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.")
//alert("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.")
//document.write("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.");

var zodiac_sign = "Pisces";
var birthMonth = "February";
var birthday = 26;
var luckyNum = 7.7; 
var horoscopeDes = "Pisces are known for being creative, imaginative, compassionate, and intuitive";
var isBelieve = true; 

document.getElementById("sign").textContent = zodiac_sign;
document.querySelector(".birthday").textContent += ` ${birthMonth} ${birthday}th`;
document.querySelector(".luckyNum").textContent += ` ${luckyNum}`;


var paragraphs = document.querySelectorAll("p");


paragraphs[0].textContent = horoscopeDes;


paragraphs[1].innerHTML += ` <strong>${isBelieve}</strong>`;

var moodRate = 5.0;
var moodSam = 4.0;
var moodZoe = 4.2

var avg = (moodRate + moodSam + moodZoe) / 3; 
document.getElementById("mood").textContent ="Today's mood rating for Pisces: 4.0 out of 5. The average mood rating of Pisces, Sagittarius, and Aquarius is: " + avg;

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var samSign = signs[1];
var zoeSign = signs[11];
var amirSign = signs[2];

document.getElementById("all-signs").textContent = "My zodiac sign is: " + amirSign + ". Sam's zodiac sign is: " + samSign + ". Zoe's zodiac sign is: " + zoeSign + ".";
var signDec = ["Today is a day for new beginnings. Embrace change and seize opportunities.","Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions","Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Be happy. Thats your greatest strength."
]

var myDec = signDec[0];
var samDec = signDec[1];
var zoeDec = signDec[2];

document.getElementById('dec').textContent = amirSign + " Horoscope: " + myDec +" "+ zoeSign +" Horoscope: " +
zoeDec+" " +samSign +" Horoscope: " + samDec;