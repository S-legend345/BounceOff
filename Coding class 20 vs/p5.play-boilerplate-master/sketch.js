var fixshape, movshape;
var gameobj1, gameobj2;

function setup() {

  createCanvas(800,400);
  fixshape = createSprite(400, 200, 50, 50);
  movshape = createSprite(200, 400, 80, 50);

  fixshape.shapeColor = "green";
  movshape.shapeColor = "green";

  fixshape.velocityX = (-5);
  movshape.velocityX = (5);

  
} 

function draw() {
  background(255,255,255);  
  movshape.x = World.mouseX;
  movshape.y = World.mouseY;
  console.log(movshape.x - fixshape.x);

   if (istouching(movshape, fixshape)) {
  movshape.shapeColor = "red";
  fixshape.shapeColor = "red";
   }

   else {
    movshape.shapeColor = "green";
    fixshape.shapeColor = "green"; 
   }


  bounceOff(moveshape, fixshape);
   
  drawSprites();
}
