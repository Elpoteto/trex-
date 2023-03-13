var solo_ing
var trex ,trex_running;
var edges;
var solo;
var solo2;

function preload(){ // funç~;ao que carregar todas as imagens e animações
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
solo_ing = loadImage ("ground2.png")
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

}
