//Hamburger Menu

//import carPark from "./carPark";



// var mysql = require('mysql2');
// var connection = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "softeng",
// database: "parking_db"
// });
// connection.connect(function(err) {
// if (err) throw err;
// console.log("Connected Successfully! - account.js");
// });

// function findfreeSpace(ParkID, UserID) {
//     var SpaceID
//     var sql = "SELECT SpaceID FROM SPACE WHERE ParkID = '"+ ParkID +"' and Available = 0 LIMIT 1";
//     connection.query(sql, function (err, returnlog){  
              
//         if (err || returnlog.length<1){
//             console.log("Invalid ParkID Or Full");
//         }   


//             SpaceID = returnlog[0].SpaceID;
//             console.log("SpaceID: " + SpaceID);
//             console.log(sql);  
//             var sql2 = "UPDATE SPACE SET Available = 1 WHERE SpaceID = '"+ SpaceID +"'"; 
//             console.log(sql2); 
//             connection.query(sql2, function (err, returnlog1){
//             }) 
//             var sql3 = "UPDATE SPACE SET UserID = '" +UserID+ "' WHERE SpaceID = '"+ SpaceID +"'";  
//             console.log(sql3);
//             connection.query(sql3, function (err, returnlog1){
//             }) 
//     })
// }

// findfreeSpace(1, 1)




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

function validateReserveForm() {
    const destination = document.getElementById('destinations');
    const date = document.getElementById('book-date'); 
    const startTime = document.getElementById('start-time'); 
    const endTime = document.getElementById('end-time'); 
    
    // Get error message elements
    const destinationError = document.getElementById('destinationError');
    const dateError = document.getElementById('date-error');
    const startTimeError = document.getElementById('start-time-error');
    const endTimeError = document.getElementById('end-time-error'); 
    
    destinationError.style.display = 'none';
    dateError.style.display = 'none';
    startTimeError.style.display = 'none';
    endTimeError.style.display = 'none'; 
    
    let isValid = true;
    
    if (destination.value === "") {
        destinationError.textContent = "Please select a destination.";
        destinationError.style.display = 'block';
        isValid = false;
    }
    
    if (date.value === "") {
        dateError.textContent = "Please select a date.";
        dateError.style.display = 'block';
        isValid = false;
    }
    
    if (startTime.value === "") {
        startTimeError.textContent = "Please select a start time.";
        startTimeError.style.display = 'block';
        isValid = false;
    }
    
    if (endTime.value === "") {
        endTimeError.textContent = "Please select an end time.";
        endTimeError.style.display = 'block';
        isValid = false;
    }
    
    // If all fields are valid, submit the reservation
    if (isValid) {
        window.location.href = 'checkout.html'; 
    }
}

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

//Placeholder

function setPlaceholder(input, placeholderText) {
    input.classList.add('placeholder-text');
    input.value = placeholderText;
    
    input.addEventListener('focus', function() {
        if (this.classList.contains('placeholder-text')) {
            this.classList.remove('placeholder-text');
            this.value = '';
        }
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.classList.add('placeholder-text');
            this.value = placeholderText;
        }
    });
}

// Setting placeholders for date and time inputs
document.addEventListener('DOMContentLoaded', function() {
    setPlaceholder(document.getElementById('book-date'), 'Select a date');
    setPlaceholder(document.getElementById('start-time'), 'Select start time');
    setPlaceholder(document.getElementById('end-time'), 'Select end time');
});