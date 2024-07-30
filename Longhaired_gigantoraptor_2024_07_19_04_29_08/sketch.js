function setup() {
  createCanvas(400, 400);

  background('#B1DBE0');
// brush
 
  strokeWeight(30);
  stroke('pink');
  
}
  
function draw() {
  let posX=mouseX;
  let posY=mouseY;
  point(posX,posY);
}  
  