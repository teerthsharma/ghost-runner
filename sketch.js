var climber , ghost1, ghost2, door,spookymusic, tower1
var invisibletower;
function preload(){
ghost1=loadImage("ghost-standing.png");
ghost2=loadImage("ghost-jumping.png");
spookymusic=loadSound("spooky.wav");
tower1 = loadImage("tower.png")
climber=loadImage("climber.png");
door=loadImage("door.png");
}
function setup(){
  createCanvas(600,600);
 
 
 tower=createSprite(300,300,10,10)
  tower.addImage("tower1",tower1)
  tower.velocityY=2;
  
   
  ghost=createSprite(300,300,10,10);
 ghost.addImage("ghost2", ghost2 );
  ghost.scale=0.5
  
}
function draw(){
    background(0);
  if(tower.y>=400){
    tower.y=200
   // tower.x=300
    
  }

  
  
  
  
  drawSprites();
}