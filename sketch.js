var rua,imgRua,parede1,parede2;
var boneco,imgBoneco;

function preload(){
  imgRua = loadImage("path.png")
  imgBoneco = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  rua = createSprite(200,400,100,300);
  rua.addImage("rua",imgRua);
  rua.velocityY = 20;

  boneco = createSprite(200,320,5,5);
  boneco.addAnimation("boneco",imgBoneco);
  boneco.scale = 0.07;

  parede1 = createSprite(-10,200,100,400);  
  parede1.visible = false;
  parede2 = createSprite(400,200,80,400);
  parede2.visible = false;
   
}

function draw() {
  background(0);

  if(rua.y > 400){
    rua.y = height/2;
  }

  boneco.x = World.mouseX;
  boneco.collide(parede1);
  boneco.collide(parede2);
  
  drawSprites();
}
