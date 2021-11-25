/* Navbar DOM Variables */
const toggleButton = document.querySelector("#toggle-button")
const navbarLinks = document.querySelector("#navbar-links")
const logo = document.querySelector("#logo")
const ross = document.querySelector("#ross")
const boss = document.querySelector("#boss")




toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')

})