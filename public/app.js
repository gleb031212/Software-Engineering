//Hamburger Menu

//import carPark from "./carPark";



var mysql = require('mysql2');
var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "softeng",
database: "parking_db"
});
connection.connect(function(err) {
if (err) throw err;
console.log("Connected Successfully! - login.js");
});





const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar-menu")

menu.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

document.getElementsByClassName('chat-button')[0].addEventListener('click', function() {
    console.log('clicked');
    window.location.href = '/chat';
    }
);

//Scroll Animations
const navigation = document.querySelector(".primary-navigation");
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

//Popups

function togglePopup(id){
    document.getElementById(id).classList.toggle("active");
    return id;
}
///reserve

function login(username, password) {
    var testquery1 = "SELECT * FROM users WHERE UserName LIKE '"+username+"' AND Password LIKE '"+password+"'";
    connection.query(testquery1, function (err, returnlog){            
        if (err){
            console.log("Invalid username or password - SQL");
        } 

        else if (returnlog.length > 0) {
            console.log(returnlog);
            console.log('Login successful! - SQL');
        }
        else {
            console.log("Invalid username or password - SQL");
        }
    })
}


function makeReserve(){
    const destination = document.getElementById('destinations');
    const date = document.getElementById('bookdate');
    const time = document.getElementById('booktime');
    // Get error message elements
    const destinationError = document.getElementById('destinationError');
    const dateError = document.getElementById('dateError');
    const timeError = document.getElementById('timeError');
    
    // Reset error messages
    destinationError.style.display = 'none';
    dateError.style.display = 'none';
    timeError.style.display = 'none';
    
    let isValid = true;
    
    // Validate destination
    if (destination.value === "") {
        destinationError.textContent = "Please select a destination.";
        destinationError.style.display = 'block';
        isValid = false;
    }
    
     // Validate date
    if (date.value === "") {
        dateError.textContent = "Please select a date.";
        dateError.style.display = 'block';
        isValid = false;
    }
    
    // Validate time
    if (time.value === "") {
        timeError.textContent = "Please select a time.";
        timeError.style.display = 'block';
        isValid = false;
    }
    
    // If all fields are valid, submit the reservation
    if (isValid) {
        carpark = document.getElementById("destinations").value;
        SlotID = findfreeSpace(carpark);
        togglePopup('booking');
        document.getElementById("here").textContent = carpark;

        if (carpark == "Medical Centre") {
            //Call the corresponding HTML table from carPark.js
        }
        else if (carpark == "Colney"){
            //Call the corresponding HTML table from carPark.js
        }  
    }
}

function findfreeSpace(carpark) {
    this.ParkID = carpark;

    var testquery1 = "SELECT * FROM SPACE WHERE ParkID = '"+ ParkID +"' and Available = 0 LIMIT 1";
    console.log(testquery1)
    SlotID = testquery1.GetSlotID///<<<FAKE
    var testquery2 = "UPDATE SPACE SET Available = 1 WHERE SlotID = '"+ SlotID +"'";
    return SpaceID;
}
findfreeSpace("");

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('new-pl-form');
    const addButton = document.getElementById('addButton');
    const formInputs = form.querySelectorAll('input[required]');

    // Function to check form validity
    const checkFormValidity = () => {
        let isValid = true;
        formInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });
        addButton.disabled = !isValid;
    };

    // Add event listeners to each input to check validity on input
    formInputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
    });

    // Initial check in case the form is pre-filled
    checkFormValidity()

    
});

// Chat Button

document.getElementsByClassName('chat-button')[0].addEventListener('click', function() {
    console.log('clicked');
    window.location.href = '/chat';
    }
);