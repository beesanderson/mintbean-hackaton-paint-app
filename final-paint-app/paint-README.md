# Notes to self

- For toolbar menu use this as guidelines (but mainly how to do it as you've never done it before ya goon lol) [create a collapsed sidebands menu](https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp)

- or this one for drop up menu which seems easier [dropup menu tutorial w3schools](https://www.w3schools.com/howto/howto_css_dropup.asp)

- for basic menu icon animated and not [menu icon non/animated](https://www.w3schools.com/howto/howto_css_menu_icon.asp)

- Also yeah no idea where there are now *two* paint-script files lol they are apparently legit the same except for where I added things to compare the two. Also...super confused at how to compare two files on github it should be super easy right? these two were on different branches. 




## BUGS To Fix: 

#### Canvas cursor isn't relative to canvas now that canvas is fully responsive (designed with [MOBILE FIRST](https://smartbear.com/learn/performance-monitoring/what-is-mobile-first/#:~:text=Mobile%20First%20Approach%20refers%20to,the%20design%20for%20mobile%20afterwards.) development SOP)

- Because I basically formatted the canvas to fit most (if any) mobile devices first it messed up the alignment and resolution with the pen/mouse down event capture. Because of this I had to do some good old fashioned finagling (which is obvious something that I shine at...I wish.)

##### Resources to fix mouse events

- Still trying to find better ones but [this](https://stackoverflow.com/questions/43853119/javascript-wrong-mouse-position-when-drawing-on-canvas/43873988) stack over flow post has been pretty helpful. I've found the first answer the most helpful though if you note the date of publishing (stack over flows *one* weakness--well that and terrifying condescending folks who make you feel less then human but I digress lol, ya for toxic environments woot woot!) which is **2017** and the formatting is even pre [ES6](https://www.w3schools.com/js/js_es6.asp) even but is simple enough to convert (even for a noob like myself.)

    - The only issue I'm having so far with conversion to ES6 syntax is the whole event key thing. That was difficult for me with my [Snake Game](https://bridgettesanderson.com/snake-by-bridgette/) too and if this was the correct repository (something fishy happened with the original one though I'll make my other snake repos public if any would like to see my README.md incessant crazy person notes like how I do lol) I was struggling with even back then. I'm not great with the whole event actions just yet but it is really cool that this project uses them so much because I've already learned a lot and can improve my snake game with the bit I've gleamed already :)  


- Okay I have no idea what this guy is talking about with the button stuff. I don't know why he created buttons in the `mouse const` but other than that I am really starting to grasp this all...or so I think. Famous last words much lol. I'm just going to take them out after committing them real quick. These are the code blocks I'm taking out: 

    ```js
    const mouse = {
    x: 0, y: 0,                             // Coordinates
    lastX: 0, lastY: 0,                     // Last frames mouse position
    b1: false, b2: false, b3: false,        // Buttons (umm?? what btns?)
    buttonNames: ["b1", "b2",  "b3"],       // Named Buttons

    ```

    ```js
                // Don't know what he's referring to here but this if statement is "just get the other info you are interested in"
            if (event.type === "mousedown") {
                mouse[mouse.buttonNames[event.which - 1]] = true       //Sets the button as down
            } else if (e.type === "mouseup") {
                mouse[mouse.buttonNames[event.which - 1]] = false      //Sets the button up
            }
    ```

- So because there is just randomly another clone of the `paint-script.js` file that is legit the same exact thing I'm just going to remove the whole button thing and see how that goes. I don't even know how that would help the original poster with their issue...

- Struggle bus is real. Found this [cool codepen](https://codepen.io/chrisjaime/pen/lcEpn) that does an alert with the coordinates. But honestly I think that last stack overflow messed me up or confused me more then I had to be because this seems pretty simple and straightforward. Just from looking at that codepen its legit just a matter of mapping out coordinates in reference to the canvas then resolution and converting them properly for the mouse strokes. I guess I could also do a reformat JS variable thing but that seems like it's a lot to do when I should be able to just do this lol 

I guess people also searched for...
1. canvas move image with mouse
2. javascript get mouse position on canvas
3. change mouse position javascript
4. how to get xy coordinates of mouse
5. canvas coordinates to pixels
6. Canvas mouse position wrong
7. How do I find my mouse coordinates on canvas?
8. How do we get the position of the mouse cursor on the screen?
9. How do you find XY coordinates on a mouse?
10. Which method is used to get the Y coordinate of the point where users have click using mouse button?












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




## Resources used for troubleshooting: 

- Responsive Canvas mouse event formatting: 

    1. [stack overflow post](https://stackoverflow.com/questions/43853119/javascript-wrong-mouse-position-when-drawing-on-canvas/43873988) from 2017 so without [ES6](https://www.w3schools.com/js/js_es6.asp) formatting. 

    2. [ya google-ley doob-ley doo](https://www.google.com/search?q=How+do+I+make+my+mouse+position+relative+to+canvas%3F&biw=758&bih=944&sxsrf=AOaemvJ4KyMxjUmi74b84xXEz9USQGNuIw%3A1637772484340&ei=xGyeYcGWFPuF9PwPiL-62Aw&ved=0ahUKEwjBiJv5ubH0AhX7Ap0JHYifDssQ4dUDCA4&uact=5&oq=How+do+I+make+my+mouse+position+relative+to+canvas%3F&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKoFaAFwAngAgAEAiAEAkgEAmAEAyAEIwAEB&sclient=gws-wiz) results for *how to make your mouse position relative to canvas*?

    3. [HTML5 Canvas Tutorials](https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/) site with super long super verbose explanations and code blocks (ALSO not formatted in [ES6](https://www.w3schools.com/js/js_es6.asp) dang it, well good practice I guess!)
        - PS--- To bad BabelJS isn't reverse compatible. When I first found out about it I got so happy because I, of course gah, did a lot of tutorials and projects in pre-ES6 syntax and I'm like yay I'll be able to quickly and efficiently convert it over to ES6 without wasting days doing it! But nope. But to be fair this might actually be a good thing because like...one less way for us all to eventually lose our jobs to the AI [future robot overlords](https://www.nytimes.com/2021/09/09/technology/codex-artificial-intelligence-coding.html) that will essentially they terk err jerbs!!!!!! (South Park reference, yes yes.) 


            ![south park they took our jobs meme](/final-paint-app/images/southpark.jpeg)

    4. [Mouse Coordinates after resizing (or Scrolling) On Canvas](https://riptutorial.com/html5-canvas/example/19534/mouse-coordinates-after-resizing--or-scrolling-) finally might have found an actual answer woot woot!

        *from the above site...*
        > Canvas apps often rely heavily on user interaction with the mouse, but when the window is resized, the mouse event coordinates that canvas relies on are likely changed because resizing causes the canvas to be offset in a different position relative to the window. Thus, responsive design requires that the canvas offset position be recalculated when the window is resized -- and also recalculated when the window is scrolled. This code listens for window resizing events and recalculates the offsets used in mouse event handlers:

                            ```JS
                            // variables holding the current canvas offset position
                            //    relative to the window
                            var offsetX,offsetY;

                            // a function to recalculate the canvas offsets
                            function reOffset(){
                                var BB=canvas.getBoundingClientRect();
                                offsetX=BB.left;
                                offsetY=BB.top;        
                            }

                            // listen for window resizing (and scrolling) events
                            //     and then recalculate the canvas offsets
                            window.onscroll=function(e){ reOffset(); }
                            window.onresize=function(e){ reOffset(); }

                            // example usage of the offsets in a mouse handler
                            function handleMouseUp(e){
                                // use offsetX & offsetY to get the correct mouse position
                                mouseX=parseInt(e.clientX-offsetX);
                                mouseY=parseInt(e.clientY-offsetY);
                                // ...
                            }
                            ```

    5. [How to get mouse position on transformed canvas](https://pretagteam.com/question/how-to-get-mouse-position-on-transformed-html5-canvas)

    6. [StackOF Cursor not aligned using html canvas](https://stackoverflow.com/questions/50966385/cursor-not-align-using-html-canvas) this one helped me figure out sizing I believe. 