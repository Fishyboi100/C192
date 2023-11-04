var roadImg, road;
var coneImg, cone, conesGroup;
var tireImg, tire, tiresGroup;
var car, carImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  roadImg = loadImage("road2.png");
  coneImg = loadImage("cone.jpg");
  tireImg = loadImage("tire.jpg");
  carImg = loadImage("Car.png");
  
}

function setup() {
  createCanvas(600, 600);
  road = createSprite(300,300);
  road.addImage("road",roadImg);
  road.velocityY = 3;
  car = createSprite(300,300,50,50)
  car.addImage("car",carImg)
  car.scale = 0.2
  conesGroup = new Group()
  tiresGroup = new Group()
  invisibleBlockGroup = new Group()
  
}

function draw() {
  background(200);
  
  if(gameState === "play"){
   
    if(road.y > 500){
      road.y = 200
    }
  if(keyDown("left_arrow")){
    car.x = car.x -3
  }
  if(keyDown("right_arrow")){
    car.x = car.x +3
  }
  if(keyDown("space")){
    car.velocityY =-3
  }
    car.velocityY = car.velocityY + 1
  if(tiresGroup.isTouching(car)){
    car.velocityY = 0
  }
  if(invisibleBlockGroup.isTouching(car) || car.y > 600){
    car.destroy()
    gameState = "end"
  }
    spawncones();
    drawSprites(); 
}

  if(gameState === "end") {

    stroke("red")
    fill("red")
    textSize(40)
    text("Game Over",300,300)
  }

}
function spawncones(){
  if(frameCount % 125 === 0) {
  cone = createSprite(175,-75)
  cone.velocityY = 3
  cone.addImage("cone",coneImg)
  cone.x = Math.round(random(120,400))
  cone.lifetime = 800
  conesGroup.add(cone)
  cone.scale = 0.15
  //tire
  tire = createSprite(200,10)
  tire.addImage("tire",tireImg)
  tire.velocityY = 3
  tire.x = cone.x
  tire.lifetime = 800
  tiresGroup.add(tire)
  car.depth = cone.depth 
  car.depth += 1
  tire.scale = 0.2
  //Invisible block
  invisibleBlock = createSprite(200,15)
  invisibleBlock.width = tire.width
  invisibleBlock.height = 1
  invisibleBlock.x = cone.x
  invisibleBlock.velocityY = 3
  invisibleBlock.lifetime = 800
  invisibleBlock.debug = true
  invisibleBlockGroup.add(invisibleBlock)
  }
}





