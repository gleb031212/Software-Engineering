//Hamburger Menu

const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar-menu")

menu.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

}

//Scroll Animations

const navigation = document.querySelector(".primary-navigation");
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

//Popups

function togglePopup(id){
    document.getElementById(id).classList.toggle("active");
    return id;
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