/* Navbar DOM Variables */
const toggleButton = document.querySelector("#toggle-button")
const navbarLinks = document.querySelector("#navbar-links")
const logo = document.querySelector("#logo")
const ross = document.querySelector("#ross")
const boss = document.querySelector("#boss")




toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')

})


//Totally worth it. Don't question me and my time acquisition skills
logo.addEventListener("mouseenter", e => {
    ross.classList.toggle('active')
    boss.classList.toggle('active')
})

logo.addEventListener("mouseleave", e => {
    ross.classList.toggle('active')
    boss.classList.toggle('active')
})

