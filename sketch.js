var fixedRect , movingRect
var car,wall



function setup() {
  createCanvas(800,400);
  
fixedRect = createSprite(200,200,80,50);
movingRect = createSprite(400,200,50,80);
car = createSprite(100,50,50,50);
wall = createSprite(600,50,20,100);

car.velocityX = 4;

fixedRect.shapeColor = "pink";
movingRect.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

if (isTouching(car,wall)){
car.shapeColor = color(255,0,0);
wall.shapeColor = color(255,0,0);

text("touched", 70,70);
}

else{
  movingRect.shapeColor = "pink";
fixedRect.shapeColor = "pink";
}

  drawSprites();
}




