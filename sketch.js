var solo_ing
var trex ,trex_running;
var edges;
var solo;
var solo2;
var nuvenpng
var c1,c2,c3,c4,c5,c6
var nuvensg
var cactosg
var estado='inicio'
var espetado
var gameover,fimdejogo
var pulosom,diesom,checkpointsom
var pontuacao=0
var vel=0
var restart,restarti
var tw,th

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

espetado=loadAnimation('trex_collided.png')
gameover=loadImage('gameOver.png')

pulosom=loadSound('jump.mp3')
diesom=loadSound('die.mp3')
checkpointsom=loadSound('checkPoint.mp3')
restarti=loadImage('restart.png')
}

function setup(){ // todas as configuraçoes dos objetos
  var mobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if(mobile){
tw=displayWidth 
th=displayHeight
createCanvas(tw,th)
  }else{
    tw=windowWidth
    th=windowHeight
    createCanvas(tw,th)
  }
frameRate(80)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  trex.addAnimation('espetado',espetado);


trex.setCollider('circle',0,0,40)

  edges = createEdgeSprites();
 
solo2 = createSprite (300,200,600,10)
solo2.visible=false


  solo = createSprite(tw/2,190,tw,20);

solo.addImage(solo_ing)

nuvensg=new Group ()
cactosg=new Group ()

fimdejogo=createSprite(tw/2,50,30,30)
fimdejogo.addImage('gameover',gameover)
fimdejogo.visible=false
fimdejogo.scale=0.5
restart=createSprite(tw/2,100,30,30)
restart.addImage('reiniciar',restarti)
restart.visible=false



}


function draw(){
  background("white");
  text('pontuação: '+pontuacao,tw-100,50)
if (estado==='inicio'){
pontuacao=pontuacao+1
if (pontuacao%500===0&&pontuacao>0){
  checkpointsom.play()
}




  if(touches.length>0||keyDown("space")&&trex.y>160){
    trex.velocityY = -10;
    pulosom.play()
    touches=[]
  }

  trex.velocityY = trex.velocityY + 0.5; // gravidade
solo.velocityX= -3

  trex.collide(edges)


if(solo.x<0){
solo.x=solo.width/2

}
nuvens ()
cactos()
if (cactosg.isTouching(trex)) {
  estado='fim'
  diesom.play()
}
}
else if(estado==='fim') {
 
 trex.velocityY=0
  solo.velocityX= 0
  cactosg.setVelocityXEach(0)
  nuvensg.setVelocityXEach(0)
  cactosg.setLifetimeEach(-1)
  nuvensg.setLifetimeEach(-1)

trex.changeAnimation('espetado',espetado)

fimdejogo.visible=true

restart.visible=true
if(mousePressedOver(restart)){

estado='inicio'
pontuacao=0
cactosg.destroyEach()
nuvensg.destroyEach()
trex.changeAnimation('running',trex_running)
fimdejogo.visible=false

restart.visible=false

}
}
  drawSprites();
  trex.collide(solo2)

}


function nuvens () {
 if (frameCount%60===0) {
  var nuven =createSprite (tw,50,30,30)
  nuven.velocityX=-4
nuven.addImage (nuvenpng)
nuven.y=Math.round(random(20,90))
nuven.lifetime=220
nuvensg.add (nuven)
trex.depth=nuven.depth+1
fimdejogo.depth=nuven.depth+1
}



}

function cactos() {
  if(pontuacao<1000){
    vel=60
  }
  else{
    vel=40
  }
  if (frameCount%vel===0) {
var cacto=createSprite (tw,175,20,20)
cacto.velocityX=-(3+(pontuacao/200))
cacto.scale=0.4
cacto.lifetime=220
cactosg.add (cacto)
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
