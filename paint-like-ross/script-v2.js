/* ------------- Variables -------------  */


/* Canvas DOM Variables */
const canvas = document.querySelector("#canvas")
const canvasParent = document.querySelector("#canvasParent")
const ctx = canvas.getContext("2d")

/* Make Canvas fit its parent container */
// fitToContainer(canvas)
canvas.width = canvasParent.offsetWidth;
canvas.height = canvasParent.offsetHeight;

/* Canvas Display Variables & Function */
function fitToContainer(canvas) {
    // Now I did use the class margin-center (margin: 0 auto) to center this in the existing parent...uh oh hopefully that doesn't cause any issues but should be okay
    canvas.width = canvasParent.offsetWidth;
    canvas.height = canvasParent.offsetHeight;
}


/* Functionality Variables */
let isDrawing = false


/* Base Stroke&Pen Settings */
ctx.strokeStyle = '#000000'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 10


/* Mouse Variables */
let lastX = 0
let lastY = 0
// let mouse = [lastX, lastY]







//my own listener to test when the window is resized and resize canvas automatically. probably won't work but hey at least I'm kind of learning something!!

// window.addEventListener("resize", fitToContainer(canvas))
window.addEventListener("resize", (e) => {
    fitToContainer(canvas) 
}) 
// OH MY GOODNESS GRACIOUS I DID IT I ACTUALLY DID IT I CREATED A WORKING FUNCTION OH MY GOODNESS I CAN'T BELIEVE IT!!! WOAH!!!

// canvas.addEventListener("mousemove", (e) => {
//     isDrawing = true
//     lastX = e.offsetX;
//     lastY = e.offsetY;
//     console.log("e offset x:" + lastX + " e offset y:" + lastY)
//     console.log(mouse + " is MOUSE")
//     console.log(e + " Is the e event")
// })

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mousemove', draw)

canvas.addEventListener("mouseup", () => isDrawing = false)

canvas.addEventListener("mouseout", () => isDrawing = false)




/* ------------- Functions -------------  */

function draw(e) {

    if(!isDrawing) return
    console.log(e)


    //start line
    ctx.beginPath();

    //Start from
    ctx.moveTo(lastX, lastY)

    //Go to
    ctx.lineTo(e.offsetX, e.offsetY)

    //Actually draw the line
    ctx.stroke()

    //Render Line from Coordinates 
    lastX = e.offsetX
    lastY = e.offsetY

}

function drawTriangle() {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}