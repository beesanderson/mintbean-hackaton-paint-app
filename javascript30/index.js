const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Base settings/stroke styles
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
//To change line thickness: 
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

//Couple "Dumby" Variables
let isDrawing = false; // This will allow the client to only draw when the mouse is pressed down but allow for the cursor to move over the canvas without drawing on it :D So when you click it's set to true and when you stop clicking its set to off 
let lastX = 0;
let lastY = 0; // You need a starting X/Y you can't just indicate starting coordinates. This is somewhat reminiscent of the snake game I made
let hue = 0; //this sets default color to RED
let direction = true; 

function draw(e) {
    if(!isDrawing) return; //stop drawing when not pushed down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    //Start from
    ctx.moveTo(lastX, lastY);
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++; //increments thus draws the RAINBOW! 
    //reset to 0 once "end" of hsl color wheel is reached: 
    if (hue >= 360) {
        hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}



canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); // This triggers if you move out of the canvas space and stop clicking and go back in, it will automatically trigger it off just in case 

