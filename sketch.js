var fixedRect, movingRect, fixedRect1, fixedRect2, fixedRect3, fixedRect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  fixedRect1 = createSprite(500, 90, 50, 100)
  fixedRect1.shapeColor = "blue";
  
  fixedRect2 = createSprite(321, 90, 50, 100)
  fixedRect2.shapeColor = "blue";

  fixedRect3 = createSprite(231, 90, 50, 100)
  fixedRect3.shapeColor = "blue";

  fixedRect4 = createSprite(400, 90, 50, 100)
  fixedRect4.shapeColor = "blue";
  



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  fixedRect4 = createSprite(400, 90, 50, 100)

 
 
  if(isTouching(movingRect,fixedRect4)){
    movingRect.shapeColor = "red";
    fixedRect4.shapeColor = "red";
   } 
   else{
    movingRect.shapeColor = "green";
    fixedRect4.shapeColor = "green";
   }
 
   if(isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";
   } 
   else{
    movingRect.shapeColor = "green";
    fixedRect3.shapeColor = "green";
   }
   

   if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
   } 
   else{
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
   }
  
   if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
   } 
   else{
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
   }
  
  
  
  
  
  
  
  
   drawSprites();



}



function isTouching(ash,bara){
  if (ash.x - bara.x < bara.width/2 + ash.width/2
    && bara.x - ash.x < bara.width/2 + ash.width/2
    && ash.y - bara.y < bara.height/2 + ash.height/2
    && bara.y - ash.y < bara.height/2 + ash.height/2) {
  
      return true;
}
else {
  return false;
}
}
















