/* Navbar DOM Variables */
const toggleButton = document.querySelector("#toggle-button")
const navbarLinks = document.querySelector("#navbar-links")



toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')

})


/* ------------- Variables -------------  */


/* Canvas DOM Variables */
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

let canvasBounds = canvas.getBoundingClientRect()




/* Canvas Display Variables */
canvas.width = 800;
canvas.height = 600;
    //Sets display size using style width and height
    canvas.style.width = "100%"
    canvas.style.height = "100%"


/* Mouse Variables */
let lastX = 0
let lastY = 0
const mouse = {
    x: 0, y: 0,                             // Coordinates
    lastX: 0, lastY: 0,                     // Last frames mouse position
}
let mousePosition = (0, 0)




/* Functionality Variables */
let isDrawing = false


/* Base Stroke&Pen Settings */
ctx.strokeStyle = '#000000'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'




/* ------------- TESTING AND DEBUGGING -------------  */

/* TESTING DEBUGGING Variables */
let testDisplayX = document.getElementById("x-value")
let testDisplayY = document.getElementById("y-value")
let testDisplayCoord = document.getElementById("combo-reg-expression")
let testMouseX = document.getElementById("mouseX")
let testMouseY = document.getElementById("mouseY")
let testMouseMovement = document.getElementById("mouse-position")
let testMouseCanvasPOS = document.getElementById("mouse-pos-canvas")

// testDisplayX.textContent = e.x
// testDisplayY.textContent = e.y



/* ------------- Functions -------------  */

// function getCoord(e) {
function getCoord(e) {
    let x = e.clientX
    let y = e.clientY
    const coords = ` x: ${ e.x } | y: ${ e.y } `
    testDisplayCoord.textContent = coords
    console.log(coords)
    testDisplayX.textContent = e.x
    testDisplayY.textContent = e.y
}

function getMousePosition(canvas, e) {
    canvasBounds = canvas.getBoundingClientRect()
    return {
        y: e.clientX - canvasBounds.left,
        x: e.clientY - canvasBounds.top
    }
    
    
}

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

    console.log(`e.offsetY: ${ e.offsetY } && e.offsetX: ${ e.offsetX }`)

    console.log(`lastX: ${ lastX } && lastY: ${ lastY }`)
    testMouseMovement.textContent = `Drawing X: ${ lastX } && Drawing Y: ${ lastY }`
}


// function getMousePosition() {
//     let canvasBounds = canvas.getBoundingClientRect()
//     return {
//         x: e.clientX - canvasBounds.left,
//         y: e.clientY - canvasBounds.top
//     }
// }

// console.log(e.offsetX)
// console.log(e.offsetY)


/* ------------- Event Listeners -------------  */

window.addEventListener("mousemove", (e) => {

})

window.addEventListener("mousemove", function (e) {
    // getCoord(mousePosition)
    let mousePosition = getMousePosition(canvas, e)
    testMouseCanvasPOS.textContent = `lastX: ${ lastX } && lastY: ${ lastY }`
    testMouseX.textContent = e.x
    testMouseY.textContent = e.y

})

canvas.addEventListener("mousemove", draw)

// canvas.addEventListener("mouseup", function (e) {
//     let mouseMovement = getMousePosition(canvas, e)
//     testMouseMovement.textContent = 
// })

// canvas.addEventListener("mousemove", function (e) {
//     let mousePosition = getMousePosition(canvas, e)
//     testDisplayMousePosition.textContent = canvasBounds
//     testMouseX.textContent = e.x
//     testMouseY.textContent = e.y

// })

canvas.addEventListener("mousedown", () => isDrawing = true)

canvas.addEventListener('mouseup', () => isDrawing = false)

canvas.addEventListener('mouseout', () => isDrawing = false)




canvas.addEventListener("click", function (e) {
    // let mousePosition = getMousePosition(canvas, e)
    // testDisplayMousePosition.textContent = `x: ${ e.x } | y: ${ e.y } `

    getCoord(mousePosition)
})

canvas.addEventListener("dblclick", getCoord)

// canvas.addEventListener("mousemove", mousePosition)

// `x: ${ e.x } | y: ${ e.y } `

// testDisplayX.textContent = e.x
// testDisplayY.textContent = e.y