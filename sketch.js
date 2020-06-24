var bullet,speed,weight ;
var wall,thickness ;

function setup() {
  createCanvas(1800,600);
 bullet=  createSprite(50, 200, 40, 10);
  wall = createSprite(1200,200,thickness,height/2);
speed = random(223,321);
weight = random(30,32);

}

function draw() {
  background(0);  
  
  hasCollided(wall,bullet);
  
  thickness = random(22,83);
  bullet.shapeColor  = "white";
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  var damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);

   if(hasCollided )
  drawSprites();
}
  