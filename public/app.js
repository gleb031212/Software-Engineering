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
