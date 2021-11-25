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
let color = document.getElementById("pen-color").value
let penSize = document.getElementById("pen-size").value
ctx.lineWidth = penSize
ctx.strokeStyle = color
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
// ctx.lineWidth = 10
// penSize = document.getElementById("pen-size").value
// ctx.lineWidth = penSize
// penType = 



/* Pen-Type Default Colors? */
// let highlighterYellow = 'hsla(60, 100%, 70%, 0.5)'


// GRADIENTS 
    //circular gradient
// let gradientHighlighter = ctx.createRadialGradient(75, 50, 5, 90, 60, 100)
// // gradientHighlighter.addColorStop(0, "hsla(60, 100%, 70%, 1)")
// // gradientHighlighter.addColorStop(1, "hsla(360, 100%, 100%, 1)")
// gradientHighlighter.addColorStop(0, "#ff6")
// gradientHighlighter.addColorStop(1, "#fff")

// highlighter color? hsla(60, 100%, 70%, 1)


/* Mouse Variables */
let lastX = 0
let lastY = 0
// let mouse = [lastX, lastY]










/* -------------------- Functions ---------------------- */

function draw(e) {
    if(!isDrawing) return
    // console.log(e)


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




// function drawHighlighter() {
//     circle(30, 30, 20);
// }

// draw circle code? woah I did it myself again woot woot!! 
function drawCircle() {
    let radius = ctx.lineWidth * 1.5
    ctx.beginPath()
    ctx.arc(lastX, lastY, radius, 0, Math.PI * 2);
    ctx.fillStyle = ctx.strokeStyle;
    // ctx.fillStyle = "red";
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
    // ctx.beginPath()
    // ctx.fillStyle = color
    // ctx.fill()
    // ctx.stroke()
    
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.strokeStyle = 'blue';
    context.stroke();
}












/* -------------------- Event Listeners ----------------------- */
/* ---------- just some. don't be greedy meow ---------- */

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

// canvas.addEventListener('click', drawCircle)


















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
    debugReset.textContent = "Cleared Canvas"
})





/* Radio Button Variables */
const pencil = document.getElementById("pen-pencil")
const brush = document.getElementById("pen-brush")
const highlighter = document.getElementById("pen-highlighter")
// const fillBucket = document.getElementById("pen-fill")
// const sketch = document.getElementById("pen-sketch")
const eraser = document.getElementById("pen-eraser")

// const erase = () => ctx.globalCompositeOperation = 'destination-out'

// const eraseDone = () => {
//     ctx.context.globalCompositeOperation ='source-over'
// }



// const changeColor = color => {
//     context.strokeStyle = color
//     context.globalCompositeOperation = 'source-over' // new
//   }


// console.log(pencil)
// console.log(brush)
// console.log(highlighter)
// console.log(fillBucket)
// console.log(eraser)

pencil.addEventListener('click', () => {
    // eraseDone()
    console.log(pencil)

    ctx.shadowBlur = 0;


    ctx.penSize = 10
    ctx.strokeStyle = color


    penType = "Pencil"
    debugPenType.textContent = penType
    debugPenSize.textContent = penSize
})


brush.addEventListener('click', () => {
    // eraseDone()
    ctx.shadowBlur = 10;
    ctx.shadowColor = color;

    ctx.strokeStyle = color

    penType = "Paint Brush"
    debugPenType.textContent = penType
    debugPenSize.textContent = penSize
})


highlighter.addEventListener('click', () => {
    // eraseDone()
    console.log(highlighter)
    ctx.shadowBlur = 0;
    // ctx.strokeStyle = gradientHighlighter
    ctx.strokeStyle = 'hsla(60, 100%, 70%, 0.4)'

    penType = "Highlighter"
    debugPenType.textContent = penType
    debugPenSize.textContent = penSize
})


// sketch.addEventListener('click', (e) => {



//     // ctx.strokeStyle = color

//     penType = "Sketch"
//     debugPenType.textContent = penType
//     debugPenSize.textContent = penSize
// })

// fillBucket.addEventListener('click', () => {
//     fill()



//     // ctx.strokeStyle = color

//     penType = "Fill | Bucket"
//     debugPenType.textContent = penType
//     debugPenSize.textContent = penSize
// })


eraser.addEventListener('click', () => {

    // erase()

    penType = "Eraser"
    debugPenType.textContent = penType
    debugPenSize.textContent = penSize
})







/* Size & Color Button Variables */
const sizeRangeBtn = document.getElementById("pen-size")
const colorBtn = document.getElementById("pen-color")


sizeRangeBtn.addEventListener('click', () => {
    console.log(sizeRangeBtn)
    penSize = document.getElementById("pen-size").value
    ctx.lineWidth = penSize
    // debugPenWidth.textContent = `Pen Size: ${ penSize } & ctx.lineWidth: ${ ctx.lineWidth }`

    debugPenWidth.textContent = penSize

})

// penSize = document.getElementById("pen-size").value
// ctx.lineWidth = penSize


colorBtn.addEventListener('click', () => {
    ctx.strokeStyle = color
    color = document.getElementById("pen-color").value
    debugColorValue.textContent = color

    
    

})






/* -------------------- DeBuGgInG StUfF ----------------------- */

const debugPenWidth = document.getElementById("pen-width")
const debugPenType = document.getElementById("utensil")
const debugColorValue = document.getElementById("color-value")
const debugReset = document.getElementById("clear-canvas")
const debugPenSize = document.getElementById("pen-size")