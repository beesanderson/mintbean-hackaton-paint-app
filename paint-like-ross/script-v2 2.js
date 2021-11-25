/* ------------- Variables -------------  */


/* Canvas DOM Variables */
const canvas = document.querySelector("#canvas")
const canvasParent = document.querySelector("#canvasParent")
const ctx = canvas.getContext("2d")

/* Make Canvas fit its parent container */
canvas.width = canvasParent.offsetWidth;
canvas.height = canvasParent.offsetHeight;

/* Canvas Display Variables & Function */
function fitToContainer(canvas) {
    canvas.width = canvasParent.offsetWidth;
    canvas.height = canvasParent.offsetHeight;
}


/* Functionality Variables */
let isDrawing = false










/* Base Stroke&Pen Settings */
let color = document.getElementById("pen-color").value
let penSize = document.getElementById("pen-size").value
ctx.lineWidth = penSize
ctx.strokeStyle = color
ctx.lineJoin = 'round'
ctx.lineCap = 'round'




/* Mouse Variables */
let lastX = 0
let lastY = 0











/* -------------------- Functions ---------------------- */

function draw(e) {
    if(!isDrawing) return
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



function drawTriangle() {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}



function getColor() {
    ctx.strokeStyle = color
    color = document.getElementById("pen-color").value
    debugColorValue.textContent = color
}


function drawPencil() {
    ctx.lineWidth = 3
}



function drawCircle() {
    let radius = ctx.lineWidth * 1.5
    ctx.beginPath()
    ctx.arc(lastX, lastY, radius, 0, Math.PI * 2);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
}



function drawMarker() {
    let radius = ctx.lineWidth * 1.5
    ctx.arc(lastX, lastY, radius, 0, Math.PI * 2);
    ctx.beginPath()
    ctx.stokeStyle = gradientHighlighter
    ctx.lineWidth = 5

}

function fill() {
    
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.strokeStyle = 'blue';
    context.stroke();
}












/* -------------------- Event Listeners ----------------------- */


window.addEventListener("resize", (e) => {
    fitToContainer(canvas) 
}) 



canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mousemove', draw)

canvas.addEventListener("mouseup", () => isDrawing = false)

canvas.addEventListener("mouseout", () => isDrawing = false)




















/* ------------- BUTTONS and SUCH -------------  */

/* Button Variables */
const resetBtn = document.getElementById("reset-canvas")
const saveBtn = document.getElementById("save-canvas")


saveBtn.addEventListener('click', DownloadCanvasAsImage)

function DownloadCanvasAsImage(){
	let downloadLink = document.createElement('a')
	downloadLink.setAttribute('download', 'PaintLikeaRoss.png')
	canvas.toBlob(function(blob) {
	  let url = URL.createObjectURL(blob)
	  downloadLink.setAttribute('href', url)
	  downloadLink.click()
	});
}


resetBtn.addEventListener('click', () => {
    console.log(resetBtn)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})





/* Radio Button Variables */
const pencil = document.getElementById("pen-pencil")
const brush = document.getElementById("pen-brush")
const highlighter = document.getElementById("pen-highlighter")
const eraser = document.getElementById("pen-eraser")





pencil.addEventListener('click', () => {
    console.log(pencil)
    ctx.shadowBlur = 0;
    ctx.penSize = 10
    ctx.strokeStyle = color
    penType = "Pencil"
})


brush.addEventListener('click', () => {

    ctx.shadowBlur = 10;
    ctx.shadowColor = color;

    ctx.strokeStyle = color

    penType = "Paint Brush"
})


highlighter.addEventListener('click', () => {

    console.log(highlighter)
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'hsla(60, 100%, 70%, 0.4)'

})




eraser.addEventListener('click', () => {
    //one day...one day...

})







/* Size & Color Button Variables */
const sizeRangeBtn = document.getElementById("pen-size")
const colorBtn = document.getElementById("pen-color")


sizeRangeBtn.addEventListener('click', () => {
    console.log(sizeRangeBtn)
    penSize = document.getElementById("pen-size").value
    ctx.lineWidth = penSize

})




colorBtn.addEventListener('click', () => {
    ctx.strokeStyle = color
    color = document.getElementById("pen-color").value
})


