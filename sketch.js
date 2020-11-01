var car , wall;
var speed , weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  //generating random speed and weight 
  speed = random(55,90);
  weight = random(400,1500);
  //creating car and wall
  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = rgb(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  //if car touches wall we calculate the deformation and change color accordingly.
  if((wall.x - wall.width/2)/car.velocityX <= (car.x+car.width/2)/car.velocityX )
  {

      deformation = (0.5 * weight * speed * speed )/22500;
      car.velocityX = 0;
      if(deformation < 100)
      {
        car.shapeColor = rgb(0,255,0);
      }
      if(deformation > 100 && deformation < 180)
      {
        car.shapeColor = rgb(230,230,0) ;
      }
      if(deformation > 180)
      {
        car.shapeColor = rgb(255,0,0);
      }
  }
  
  
  drawSprites();
}