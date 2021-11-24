/* Navbar DOM Variables */
const toggleButton = document.querySelector("#toggle-button")
const navbarLinks = document.querySelector("#navbar-links")



toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')

})



/* Canvas DOM Variables */
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")




/* Canvas Display Variables */
canvas.width = 800;
canvas.height = 600;
    //Sets display size using style width and height
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    //To get position the position of the canvas
    const canvasBounds = canvas.getBoundingClientRect()
    // //Set and Create Canvas Bounds (but same as above? hmm)
    // const bounds = canvas.getBoundingClientRect()

    console.log(canvasBounds)



/* Mouse Variables */
let lastX = 0
let lastY = 0
const mouse = {
    x: 0, y: 0,                             // Coordinates
    lastX: 0, lastY: 0,                     // Last frames mouse position
}

console.log(mouse)


/* Functionality Variables */
let isDrawing = false
let hue = 0
let direction = true


/* Base Stroke&Pen Settings */
ctx.strokeStyle = '#000000'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
//To change line thickness: 
// ctx.lineWidth = 100;



/* Functions */


function mouseEvent(event) {
    const bounds = canvas.getBoundingClientRect()

    //StackOF post says to get the mouse coordinates you subtract the canvas top left and any scrolling
    mouse.x = event.pageX = bounds.left - scrollX
    mouse.y = event.pageY = bounds.top - scrollY

    //Now to properly scale mouse coordinates to the canvas resolution coordinates we have to normalize the mouse coordinates from 0 to 1 then divide the bounds (canvas position) width and height 
    // TOP LEFT = (0,0)
    // BOTTOM RIGHT (also includes off canvas) = (1, 1)

    mouse.x /= bounds.width
    mouse.y /= bounds.height

    //now we scale this to the canvas coordinates by multiplying the normalized coordinates with the canvas resolution
    mouse.x *= canvas.width
    mouse.y *= canvas.height

} 



function draw(e) {
    if(!isDrawing) return;
    console.log(e)

    //try to call the newly created mouseEvent() function. I don't know the difference between (e) and (events) though I don't know if that will create issues?

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