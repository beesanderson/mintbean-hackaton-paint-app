# Fun with CDNs

I'm going through a super quick tutorial that [Jasmine Reese](https://github.com/Jasmine582) passed along to me and it's quite honestly the first time I've ever really used a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) as in the past I've either not been able to get them to work (I know...I'm that helpless!) or just saw them as "cheating" and a way that I could and probably *would* exploit to avoid learning fundamental concepts. Now I'm wishing I would have just started sooner as it would have made my life a bit easier...perhaps at least. 

## The Tutorial: [Simple Paint App](https://www.youtube.com/watch?v=EQFibzKT_WE) 

Just a super quick video that uses [p5.JS](https://p5js.org/) and [FontAwesome](https://fontawesome.com/) to walk you through the basics of creating a canvas by way of DOM manipulation. To be honest I hadn't even a clue that *p5.js* even existed lol 

### Finished my project around 4:30pm and then began working on ["Landing Page"](http://bridgettesanderson.com/mintbean-hackaton-paint-app/)


#### To use P5JS & FontAwesome CDNs yourself...

### **p5.js**
Just put the CDN script link found [here](https://p5js.org/get-started/) in the `head` of your `HTML` document and refer to their documentation on how to use. 
```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
```

There is an awesome YouTube channel that provides easy to use (AND fun!!!) tutorials for p5.js use. Check out [The Coding Train](https://www.youtube.com/c/TheCodingTrain/featured)'s in depth [P5.JS Tutorial Playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) to become a master yourself :) 


### **FontAwesome**
So with this one it's a little different from your typical CDN which I just realized now lol. This is something early on (as a mega super basic rookie beginner grade f rookie coder) I didn't realize you had to do because I'm so impatient (or perhaps A.D.H.D?) to actually read things fully sometimes and I'm realizing that's what kept me from using *any* CDNs. I'm honestly wondering if this is the case for the other ones I've struggled with? 


All you have to do is just create an account with [FontAwesome](https://fontawesome.com/start) and then it'll take you to this [prompt](https://fontawesome.com/start/confirm) where, once you register the email address you used for the new account, they'll send you your personal CDN link. It contains your user credentials. It'll look something like this: 

```html
<script src="https://kit.fontawesome.com/NUMBERS-HERE.js" crossorigin="anonymous"></script>
```
Which you will do the same thing with as the previous CDN, place it in the head of your `HTML` document and then refer to their documentation to use it. Very easy! Well that is, if you actually take the time *to read* unlike me!




*As a side note I sometimes wonder if I'm the only one who is a self taught beginner who doesn't seem as spry or hip and jiggy with it as those who attend BootCamps because I struggle to find some of the resources they have so many of personally. Because of this I've been considering compiling some super useful resources for other "self taught" desperate devs like myself to help them so they don't wind up in my position.*  