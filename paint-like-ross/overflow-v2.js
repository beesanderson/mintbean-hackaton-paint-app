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










// var testCanvas = document.getElementById("theCanvas");
// var parent = document.getElementById("parent");
// testCanvas.width = parent.offsetWidth;
// testCanvas.height = parent.offsetHeight;

/**$(document).ready(function() {
  var canvas = document.getElementById("theCanvas");
  canvas.width = $("#parent").width();
  canvas.height = $("#parent").height();
});**/


// function fitToContainer(canvas) {

//     // Make it visually fill the positioned parent
//     canvas.style.width = '100%'
//     canvas.style.height = '100%'
//     // canvas.width = canvasParent.offsetWidth;
//     // canvas.height = canvasParent.offsetHeight;

//     // Then make it visually fill the positioned parent 
//             //NOTE this will not REFORMAT/REFACTOR code, that will most likely have to be done with the .getBoundingClientRect() method again :( 
//     canvas.width = canvas.offsetWidth
//     canvas.height = canvas.offsetHeight
// }
