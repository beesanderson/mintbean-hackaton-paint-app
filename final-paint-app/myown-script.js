/* Navbar DOM Variables */
const toggleButton = document.querySelector("#toggle-button")
const navbarLinks = document.querySelector("#navbar-links")



toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')

})



/* Window DOM Variables */
var maxScreenWidth = 1800,
   maxScreenHeight = 1200,
   scaleFillNative, screenWidth, screenHeight;

let startScreenWidth = window.innerWidth
let startScreenHeight = window.innerHeight



/* Canvas DOM Variables */
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const canvasBounds = canvas.getBoundingClientRect()
let canvasOffsetX = canvasBounds.left;
let canvasOffsetY = canvasBounds.top;



/* Canvas Display Variables */
canvas.width = 800;
canvas.height = 600;
    //Sets display size using style width and height
    canvas.style.width = "100%"
    canvas.style.height = "100%"







/* Functionality Variables */
let isDrawing = false



/* Base Stroke&Pen Settings */
ctx.strokeStyle = '#000000'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 10



/* Mouse Variables */
// let lastX = 0
// let lastY = 0
const mouse = {
    x: 0, y: 0,
    lastX: 0, lastY: 0,
}





// don't know what this is about lol
// var translateX, translateY



/* TESTING DEBUGGING Variables */
let testDisplayX = document.getElementById("x-value")
let testDisplayY = document.getElementById("y-value")
let testDisplayCanvasBounds = document.getElementById("canvas-bounds-value")
let testDisplayResponsiveCanvasBounds = document.getElementById("responsive-bounds-value")
let testDisplayCanvasWidth = document.getElementById("canvas-width")
let testDisplayCanvasHeight = document.getElementById("canvas-height")
let testDisplayCanvasOffsetX = document.getElementById("canvas-offsetX")
let testDisplayCanvasOffsetY = document.getElementById("canvas-offsetY")

let testStartScreenWidth = document.getElementById("start-screen-width")
let testStartScreenHeight = document.getElementById("start-screen-height")



/* Functions */

//find mouse position/coordinates






// Resize Window/Canvas

function resize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    //here you set scaleX and scaleY to the same variable 
    scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight)

    //uh oh here is where we set the canvas to the screen width/height both which is not what I want I want the div that it's in to be set to that...hmm...
    canvas.width = screenWidth
    canvas.height = screenHeight

    //Now Store these values
    lastX

}





/* Event Listeners */

// window.addEventListener("resize", )

window.addEventListener("mousemove", function (e) {
    // console.log(`x: ${ e.x } | y: ${ e.y } `)

    //testing variables:
    testDisplayX.textContent = e.x
    testDisplayY.textContent = e.y
    testDisplayCanvasBounds.textContent = canvasBounds
    // testDisplayCanvasWidth.textContent = canvas.width
    // testDisplayCanvasHeight.textContent = canvas.height
    testDisplayCanvasWidth.textContent = canvas.width
    testDisplayCanvasHeight.textContent = canvas.height
    testDisplayCanvasOffsetX.textContent = canvasOffsetX
    testDisplayCanvasOffsetY.textContent = canvasOffsetY
    

    //SCREEN SIZE variables
    testStartScreenWidth.textContent = startScreenWidth
    testStartScreenHeight.textContent = startScreenHeight
    

    // testDisplayResponsiveCanvasBounds.textContent =
})

// window.addEventListener("resize", )

// canvas.addEventListener("mousemove", )

// canvas.addEventListener("mousedown", () => isDrawing = true)

// canvas.addEventListener('mouseup', () => isDrawing = false)

// canvas.addEventListener('mouseout', () => isDrawing = false)