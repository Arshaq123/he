var canvas;
var music;

 var surface1;
 var surface2;
 var surface3;
 var surface4;
 var box;
 
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1=createSprite();
    surface1.shapeColour="blue"
    surface2=createSprite();
    surface2.shapeColour="orange"
    surface3=createSprite();
    surface3.shapeColour="maroon"
    surface4=createSprite();
    surface4.shapeColour="green"

    //create 4 different surfaces

    box=createSprite(random(20,270));
    box.shapeColour="white"
     box.velocity=-5
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    
   if(surface1.isTouching(box)&& box.bounceOff(surface1)){
    box.shapeColour="BLUE"
    music.play();
   }
   if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    box.shapeColour="ORANGE"

   }
   if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    box.shapeColour="MAROON"

   }
   if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    box.shapeColour="GREEN"


    if(surface2.isTouching(box)){
        box.shapeColour="ORANGE"
        ball.velocity=0;
        music.stop(); }
   
    //add condition to check if box touching surface and make it box
}

}
drawSprites();