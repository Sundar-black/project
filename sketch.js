var box;

function setup() {
  createCanvas(900,900);
  box = createSprite(400,400,60,10);

}

function draw() 
{
   background(148, 3, 252);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box.shapeColor=color(252, 231, 3);
    
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box.shapeColor=color(3, 53, 252);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box.shapeColor=color(252, 3, 206);
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box.shapeColor=color(252, 3, 20);
  }

  drawSprites();
}




