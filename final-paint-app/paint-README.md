# Notes to self

- For toolbar menu use this as guidelines (but mainly how to do it as you've never done it before ya goon lol) [create a collapsed sidebands menu](https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp)

- or this one for drop up menu which seems easier [dropup menu tutorial w3schools](https://www.w3schools.com/howto/howto_css_dropup.asp)

- for basic menu icon animated and not [menu icon non/animated](https://www.w3schools.com/howto/howto_css_menu_icon.asp)

### To check your movements: 
```js
/* Functions */

function draw(e) {
    console.log(e)
}


/* Event Listeners */

canvas.addEventListener('mousemove', draw)
```

This is the most basic form of functionality: 

```html
                <div id="canvas-wrapper" class="canvas-wrapper margin-center">

                    <canvas id="canvas" class="canvas"></canvas>
        
                </div>
```

```JS
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
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener("mousedown", () => isDrawing = true)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
```



## Code Snips and work around(s) plus different directions

If you want to do the toolbar-menu on the same line as the others:

```HTML
            <div class="toolbar-menu">

                <input id="edit-tool" name="pen-type" type="radio">
                <label for="edit-tool">
                    <i class="fas fa-edit"></i>
                </label>

                <!-- <h2>Tools</h2> -->
            </div>

            <div class="type">
                <input id="pen-pencil" name="pen-type" type="radio" checked>
                <label for="pen-pencil">
                    <i class="fas fa-pen"></i>
                </label>

                <input id="pen-brush" name="pen-type" type="radio">
                <label for="pen-brush">
                    <i class="fas fa-paint-brush"></i>
                </label>

            </div> <!-- /end .controls -->

```

```CSS
.toolbar-menu {
    font-size: 1.3rem;;
    text-decoration: none;
    font-weight: 900;
    color: var(--darkest-mint);
}

.controls .toolbar-menu,
.controls .type,
.controls .size,
.controls .color {
    margin: 10px 0px;
}

/* hides radio buttons not icons */
.controls .type input,
.controls .toolbar-menu input {
    display: none;
}

```

Alright. Gotten to the point once again where I have no idea what I'm doing lol 

```HTML
        <div class="toolbar-menu">

            <input id="edit-tool" name="edit-menu" type="radio" checked>
                <label for="edit-tool">
                    <i class="fas fa-edit"></i>
                    <span class="tools">Tools</span>
                </label>


        </div>
```

```CSS

```
