const canvas = document.querySelector("#draw");
/* 
HTML Canvas is straight up just MS Paint-as in the data is just 2d so we need to get the "context" or the data/user input from point a to point b which will be done through the content (a block of pixels) by way of the method .getContext (which can be 2D or 3D but we will be doing 2D for project)
You actually don't draw specifically nor directly onto the canvas itself its all on the context
*/
const ctx = canvas.getContext("2d");
/* 
Make sure the canvas element is the correct sizing which will default to 800x800 per the HTML designations 
*/ 
canvas.width = widow.innerWidth;
canvas.height = window.innerHeight;