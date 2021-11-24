/* Navbar DOM Variables */
const toggleButton = document.querySelector("#toggle-button")
const navbarLinks = document.querySelector("#navbar-links")



toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')

})



/* Canvas DOM Variables */
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")



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
    if(!isDrawing) return;
    console.log(e)

    //start the path being down by accessing the context from canvas 
    ctx.beginPath()

    //moving the line from lastX to lastY
    ctx.moveTo(lastX, lastY)

    //setting/linking the lastX && lastY to the key(e) evens w e.offsetX && e.offsetY
    ctx.lineTo(e.offsetX, e.offsetY)

    //to actually draw
    ctx.stroke()

    //set lastX and lastY from correct coordinates 
    lastX = e.offsetX
    lastY = e.offsetY
}







/* Event Listeners */

canvas.addEventListener('mousemove', draw)

canvas.addEventListener("mousedown", () => isDrawing = true)


canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)


// canvas.addEventListener("mousedown", (e) => {
//     isDrawing = true
//     [lastX, lastY] = [e.offsetX, e.offsetY]
// })

// canvas.addEventListener('mousemove', draw)
// canvas.addEventListener('mouseup', () => isDrawing = false)
// canvas.addEventListener('mouseout', () => isDrawing = false)