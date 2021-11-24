/* Navbar DOM Variables */
const toggleButton = document.querySelector("#toggle-button")
const navbarLinks = document.querySelector("#navbar-links")



toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')

})



/* Canvas DOM Variables */
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

console.log(canvas)

/* Functionality Variables */
let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true


/* Base Stroke&Pen Settings */
ctx.strokeStyle = '#000000'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
//To change line thickness: 
// ctx.lineWidth = 100;



/* Functions */

function draw(e) {

}







/* Event Listeners */

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true
    [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)