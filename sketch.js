var solo_ing
var trex ,trex_running;
var edges;
var solo;
var solo2;
var nuvenpng
var c1,c2,c3,c4,c5,c6

function preload(){ // funç~;ao que carregar todas as imagens e animações
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
solo_ing = loadImage ("ground2.png")
nuvenpng = loadImage ('cloud.png')
c1=loadImage ('obstacle1.png')
c2=loadImage ('obstacle2.png')
c3=loadImage ('obstacle3.png')
c4=loadImage ('obstacle4.png')
c5=loadImage ('obstacle5.png')
c6=loadImage ('obstacle6.png')
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();
 
solo2 = createSprite (300,200,600,10)
solo2.visible=false


  solo = createSprite(300,190,600,20);

solo.addImage(solo_ing)



}

function draw(){
  background("white");

  if(keyDown("space")&&trex.y>160){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5; // gravidade
solo.velocityX= -3

  trex.collide(edges)
trex.collide(solo2)

if(solo.x<0){
solo.x=solo.width/2



}
  drawSprites();
nuvens ()
cactos()

}


function nuvens () {
 if (frameCount%60===0) {
  var nuven =createSprite (610,50,30,30)
  nuven.velocityX=-3
nuven.addImage (nuvenpng)
nuven.y=Math.round(random(20,90))
nuven.lifetime=220
}



}

function cactos() {
  if (frameCount%60===0) {
var cacto=createSprite (400,160,20,20)
cacto.velocityX=-3
var ale=Math.round(random(1,6))
switch (ale) {
  case 1:cacto.addImage(c1)
    break;
    case 2:cacto.addImage(c2)
    break;
    case 3:cacto.addImage(c3)
    break;
    case 4:cacto.addImage(c4)
    break;
    case 5:cacto.addImage(c5)
    break;
    case 6:cacto.addImage(c6)
    break;


  default:
    break;
}
  }

}
