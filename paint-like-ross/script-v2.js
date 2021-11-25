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
