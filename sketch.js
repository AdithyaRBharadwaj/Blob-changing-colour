var fixedrectangle,movingrectangle

function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 50, 50);
  movingrectangle=createSprite(400,100,20,20);
  movingrectangle.shapeColor="black";
  fixedrectangle.shapeColor="black";
}

function draw() {
  background(0,255,255);
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;

  if(movingrectangle.x - fixedrectangle.x < movingrectangle.width/2+fixedrectangle.width/2
  &&  fixedrectangle.x - movingrectangle.x < movingrectangle.width/2+fixedrectangle.width/2
     && movingrectangle.y- fixedrectangle.y < movingrectangle.height/2+fixedrectangle.height/2
     && fixedrectangle.y - movingrectangle.y < movingrectangle.width/2+fixedrectangle.height/2){

     movingrectangle.shapeColor="white";
     fixedrectangle.shapeColor="white";
  }
  else{
   movingrectangle.shapeColor="black";
   fixedrectangle.shapeColor="black";
  }
    
  drawSprites();
}