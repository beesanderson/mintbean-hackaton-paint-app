# This is a "Code Along" from [JavaScript30.com](https://courses.wesbos.com/account/access/61946b0b41ee9b1bad8e11ce/view/194129962) Canvas Tutorial

[GitHub Project Repository](https://github.com/wesbos/JavaScript30) 
- This project is from "[Day 8](https://github.com/wesbos/JavaScript30/tree/master/08%20-%20Fun%20with%20HTML5%20Canvas)" (or the eighth tutorial video) titled "*Fun with HTML5 Canvas*" 

Also, I will be including the semicolons in this project as I know for me personally it was helpful as a "rookie/noob" or beginner developer. It helps indicate where a code block ends and to this day I can still get confused with a lot of nested elements. I do most of my own personal development without them for the most part although have found them incredibly useful when learning something new. 

## Notes || Musings
Hmm, seem to be having issues with the 
```JS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```
properties...it is still falling back to the default in `HTML5` markup of 800x800 despite instructor's being resized to browser window's dimensions. Gunna close out and reload and see if that helps. Sometimes `LivePreview` VS Code extension can be a bit goofy. 

- Huh still didn't work. I mean it's no big deal but I wonder why it didn't or what I am doing wrong/differently. I've structured the project in their own files whereas the teacher has his own in one document which is fine I'm just doing it this way so I can keep playing with it once I'm done. Wow like not even two mins in and I've already goofed it up. Grade A right here indeed haha.
    - Alright now it works. It appears as though you need to refresh or reload each time for it to correctly format. This probably wouldn't happen in React because it manages the different states automatically. As for why it wasn't resizing originally I'm sure it was one of those silly typos or easily overlooked (by me at least ha) typos or mistakes. 


- For the `ctx.strokeStyle` ID name I didn't choose it lol I don't like to swear! 

- For further reading you can look up on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) the different options you have for the `.lineJoin || .lineCap` methods. (This was the link that Samantha Tarrice sent that I didn't look at yet, yay for how awesome my new "friends" in tech are!!)

- The "mouse move" event listener in javascript can be console logged to show this: 
![key(e)](/javascript30/images/eventlistener-cursor.png)
```JS
function draw(e) {
    console.log(e)
}

canvas.addEventListener('mousemove', draw);
```

- In regards to the (e) keys with the offsetX & offsetY it does somewhat remind me of when I made my snake game although I used some "out of date" methods (due to the tutorials) and I'm wondering if this could actually replace some of the mechanics to the current standards? I used the `Modulus Operator` for my personal [Snake Game](https://github.com/beesanderson/offical-snake-game) (which was the the first one I've ever made on my own though it was after doing the tutorial so I did have to reference a lot though it was done without copying and pasting but I digress....) 

    - I used the the currently deprecated [Keycodes.io](https://keycode.info/) event bindings in JavaScript which is now [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) but was to new to the concept to be able to branch off and adapt the old code to the new code. Perhaps after completing this I might be able to as I will have experience with the (e) key methodology?

    - I was actually beginning to investigate if it would be worth me looking into [BabelJS](https://babeljs.io/) at the time to quickly (without much thought nor understanding honestly) convert the older deprecated syntax into the current one but decided against it because I figure it is more beneficial for me to do it *myself* and actually figure it out over copying and pasting though I could have done this in a time crunch or if I had an actual job or project deadline but once again I digress lol. 

        - The [Modulus Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) MDN Docs. Its a very useful operator especially in game board events though I wonder if it is still commonly used or what other applications it could be used for. 

```JS
function draw(e) {
    if(!isDrawing) return; //stop drawing when not pushed down
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); 
```

- Without linking or designating a starting or ending point we will currently (with the code block ahead) always start from the same point, aka: start from 0

![OffsetX & OffsetY](/javascript30/images/startfrom.png)

- We just have to update the `lastX` and the `lastY` variables to the `e.offsetX` and `e.offsetY` coordinates :) 


```JS
function draw(e) {
    if(!isDrawing) return; //stop drawing when not pushed down
    console.log(e);
    ctx.beginPath();
    //Start from
    ctx.moveTo(lastX, lastY);
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
}
```
The above code block will actually create the "paint by dots" or whatever you'd want to call it interaction, so it will start at the last point and draw a line connecting the previous spot to the *new* spot...wow I feel brain dead but I swear I understand lol its mega simple haha
So the first drawing will always start at 0,0 and when you continue to draw it will only start off from where I last left off causing us to only draw one continuous line. **In order to fix this:**

```JS
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})
```

We will take the `canvas.addEventListener('mousedown', () => isDrawing = true);` and change it from an inline function to an *actual* function block and will have to update our last x and y 


- To change the line thickness you just use the method `.lineWidth` and input whatever thickness you'd like

- You can also change it from round to other options. It defaults to what I can only call "slinky mode" in my cool personal naming convention style (wow my newly blossoming Developer humor is truly not funny...not even to me sigh)


- I am LOVING this site, instructor is now explaining what [HSL Color Format](https://en.wikipedia.org/wiki/HSL_and_HSV) is and directed us to go to "Mother Effing HSL"'s website lol which is [here](https://mothereffinghsl.com/) I just honestly wanted to write out that link because its hilarious and awesome. But its PROGRAMMATICALLY SELECTING THE RAINBOW which is the coolest bestest sentence I've read at least today so far that is! I **LOVE** me some **RAINBOWS** yay!!! 
    - *H*ue
    - *S*aturation
    - *L*ightness
    Is what makes up *HSL* and its how you can Prooooograaaaammmm the rainbow (which man you had me at rainbow it doesn't take much!!)
    
- Sooo anyway why HSL is handy is because red starts at 0 and the opposite side of the spectrum is 360 so we can basically change color super easily by setting hue as a variable and incrementing the first number :) 

![Rainbow Brush](/javascript30/images/rainbow-yay.png)
- Thus you can now draw the rainbow :) that's it project over I win totally done this is all I or anyone else will ever need forever, the end, thanks for coming guys! ((I think I need sleep or food or coffee lol))
    - Another cool thing with the hue option is that once it goes over 360 it just loops back in around on itself so even when its at like 6000 it'll still be doing the rainbow. You could include a "if then" statement to flip it back to 0 once it hits 360 though (which is probably just best practice to do anyway)

- Can set the `.lineWidth` to hue also so it'll keep incrementing at the same rate though if you don't cap off at 360 that might be a little bit awkward. Could just create a new variable also but just for sake of teaching he used this as an example :) 
    - This is just basically saying that if the line width is less then 100 continue to increment it until it reaches 100 in which case start to decrement it until it reaches one and so on and so forth. Will create a loop of getting thicker then thinner with progression based on 1 < 100 so yup 

```JS
let direction = true; //Default is true

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
```

- `.globalCompositeOperation` method is something that you may have seen if you've used any type of a photo editing program but basically when the line draws over itself it'll eventually turn it to black like so: 

![Exp of Global Composite Operation Image](/javascript30/images/globalcompoperation.png)

- you can achieve this by declaring...
```JS
ctx.globalCompositeOperation = 'multiply';
```
...With you other variables at the top of your `/index.js` file. You can also start to investigate different options using the aforementioned [MDN Rendering Context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) documentation and begin your fun!! 

### ...And thus ends the tutorial! 
I've learned a lot and am naively under the impression that from this great foundation the tutorial gave me I'll be able to start on making my own Paint App and apply the new knowledge gleamed from here! Happy coding!! :D 




# Quick'n'Easy(*s*) Section

## Quick Copy'n'Paste or CodeSnip Reference: 

To change brush thickness: 
```JS
const ctx = canvas.getContent('2d');

ctx.lineWidth = 100;
```

To update start/end point for brush: 
```JS
function draw(e) {
    if(!isDrawing) return; //stop drawing when not pushed down
    console.log(e);
    ctx.beginPath();
    //Start from
    ctx.moveTo(lastX, lastY);
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})
```

To set brush color: 
```JS
let hue = 0; //SETS DEFAULT COLOR TO RED

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// ^^^ Should be declared in draw(e) function

hue++;
// TO DRAW RAINBOW YAY
```
Can include an `if` statement to flip hue back to 0 once its greater than or equal to 360 to keep from looping around on itself though not totally needed because it will just continue to go through the rainbow color wheel infinitely :o 

#### To increase brush thickness: 
```JS
let direction = true; //Default is true

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
```








## ES6 Syntax Tweaks (aka quick examples)

```JS
    lastX = e.offsetX;
    lastY = e.offsetY;
```
Can be changed to: 
```JS
    [lsatX, lastY] = [e.offsetX, e.offsetY]
```
This is called "Destructuring an Array"




## EOD 11/17/21 30mins or less Deployment Challenge: 

I am unrealistically hoping to deploy my itty bitty project before 5pm Central time before I have to leave to pick up my daughter...so far I've been distracted by doing README.md updates and goofing around on the "sites" (if you can call it that...yet?) root homepage along with github pages docs to actually have done anything of use nor merit. Sigh. And so it begins...the mom brain kicks in and it's always the last hour of the day...

- GitHub [pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites) recommends using [Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll) when you intend to host a static site with them. Not having time to read anything I'm going to wing it which of course is always super successful...right? 

- I actually don't think I need Jekyll but perhaps these are the famous last words? Time shall tell..

- I umm...I think I've done it??? It's 4:46pm...it would have been done sooner but in my classic ADHD oh a piece of candy style I jumped over to the actual documentation on Jekyll and GitHub Pages without even scrolling and going through GitHub pages main website...and this is why everyone automatically thinks I'm slow or they fall silent after I'm done speaking...sigh. Lol 