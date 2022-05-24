var Batman, BatmanImage;
var Riddler1,Riddler2, Riddler3, Riddler5, Riddler6, Riddler7, Riddler8, Riddler9, Riddler10, RiddlerImage;
var Gun1, Gun2, Gun3, Gun4, Gun5, Gun6, Gun7, Gun8, Gun9 , Gun10, Gun11, Gun12, Gun13, Gun14, Gun15, Gun16, Gun17, Gun18, Gun19, Gun20, GunImage, GunGroup;
var score = 0;

function preload(){
  BatmanImage = loadImage("IMAGES/BATMAN.png");
  RiddlerImage = loadImage("IMAGES/RIDDLER.png");
  GunImage = loadImage("IMAGES/Gun.png");
}

function setup() {
  createCanvas(400,400);
  Batman =  createSprite(42, 200, 10, 10);
  Batman.addImage(BatmanImage);
  Batman.scale = 0.5;
  
  GunGroup = createGroup();
  GunGroup.add(Gun1,Gun2,Gun3,Gun4, Gun5,Gun6,Gun7,Gun8, Gun9,Gun10,Gun11,Gun12, Gun13,Gun14,Gun15,Gun16, Gun17,Gun18,Gun19,Gun20);
  
  Riddler1 = createSprite(400,100,10,10);
  Riddler1.addImage(RiddlerImage);
  Riddler1.scale = 0.1;

  Riddler2 = createSprite(600,300,10,10);
  Riddler2.addImage(RiddlerImage);
  Riddler2.scale = 0.1;

  Riddler3 = createSprite(900,150,10,10);
  Riddler3.addImage(RiddlerImage);
  Riddler3.scale = 0.1;

  Riddler4 = createSprite(1300,250,10,10);
  Riddler4.addImage(RiddlerImage);
  Riddler4.scale = 0.1;

  Riddler5 = createSprite(1500,100,10,10);
  Riddler5.addImage(RiddlerImage);
  Riddler5.scale = 0.1;

  Riddler6 = createSprite(1600,300,10,10);
  Riddler6.addImage(RiddlerImage);
  Riddler6.scale = 0.1;

  Riddler7 = createSprite(2200,150,10,10);
  Riddler7.addImage(RiddlerImage);
  Riddler7.scale = 0.1;

  Riddler8 = createSprite(2500,250,10,10);
  Riddler8.addImage(RiddlerImage);
  Riddler8.scale = 0.1;

  Riddler9 = createSprite(1700,350,10,10);
  Riddler9.addImage(RiddlerImage);
  Riddler9.scale = 0.1;

  Riddler10 = createSprite(2000,150,10,10);
  Riddler10.addImage(RiddlerImage);
  Riddler10.scale = 0.1;
  
  Gun1 = createSprite(300,125,10,10);
  Gun1.addImage(GunImage);
  Gun1.scale = 0.1;

  Gun2 = createSprite(600,325,10,10);
  Gun2.addImage(GunImage);
  Gun2.scale = 0.1;

  Gun3 = createSprite(900,225,10,10);
  Gun3.addImage(GunImage);
  Gun3.scale = 0.1;

  Gun4 = createSprite(1200,325,10,10);
  Gun4.addImage(GunImage);
  Gun4.scale = 0.1;

  Gun5 = createSprite(1500,125,10,10);
  Gun5.addImage(GunImage);
  Gun5.scale = 0.1;

  Gun6 = createSprite(1800,325,10,10);
  Gun6.addImage(GunImage);
  Gun6.scale = 0.1;

  Gun7 = createSprite(2100,225,10,10);
  Gun7.addImage(GunImage);
  Gun7.scale = 0.1;

  Gun8 = createSprite(2400,325,10,10);
  Gun8.addImage(GunImage);
  Gun8.scale = 0.1;

  Gun9 = createSprite(1300,125,10,10);
  Gun9.addImage(GunImage);
  Gun9.scale = 0.1;

  Gun10 = createSprite(1600,325,10,10);
  Gun10.addImage(GunImage);
  Gun10.scale = 0.1;

  Gun11 = createSprite(1900,225,10,10);
  Gun11.addImage(GunImage);
  Gun11.scale = 0.1;

  Gun12 = createSprite(1200,325,10,10);
  Gun12.addImage(GunImage);
  Gun12.scale = 0.1;

  Gun13 = createSprite(1500,125,10,10);
  Gun13.addImage(GunImage);
  Gun13.scale = 0.1;

  Gun14 = createSprite(1800,325,10,10);
  Gun14.addImage(GunImage);
  Gun14.scale = 0.1;

  Gun15 = createSprite(2100,225,10,10);
  Gun15.addImage(GunImage);
  Gun15.scale = 0.1;

  Gun16 = createSprite(1200,325,10,10);
  Gun16.addImage(GunImage);
  Gun16.scale = 0.1;

  Gun17 = createSprite(2800,225,10,10);
  Gun17.addImage(GunImage);
  Gun17.scale = 0.1;

  Gun18 = createSprite(2600,325,10,10);
  Gun18.addImage(GunImage);
  Gun18.scale = 0.1;

  Gun19 = createSprite(2500,125,10,10);
  Gun19.addImage(GunImage);
  Gun19.scale = 0.1;

  Gun20 = createSprite(2200,325,10,10);
  Gun20.addImage(GunImage);
  Gun20.scale = 0.1;
  
}

function draw() {
  background(255,255,255);  

  Text("SCORE : "+score,50,20);

  if(Batman.isTouching(Riddler1)){
    Riddler1.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler2)){
    Riddler2.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler3)){
    Riddler3.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler4)){
    Riddler4.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler5)){
    Riddler5.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler6)){
    Riddler6.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler7)){
    Riddler8.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler8)){
    Riddler8.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler9)){
    Riddler9.destroy();
    score = score + 1;
  }
  if(Batman.isTouching(Riddler10)){
    Riddler10.destroy();
    score = score + 1;
  }

  if(Batman.isTouching(GunGroup)){
    Batman.velocityY = 2;
    Text("GAME OVER !",100,200);
  }

  if(keyDown("space")){
    Riddler1.velocityX = -2;
    Riddler2.velocityX = -2;
    Riddler3.velocityX = -2;
    Riddler4.velocityX = -2;
    Riddler5.velocityX = -2;
    Riddler6.velocityX = -2;
    Riddler7.velocityX = -2;
    Riddler8.velocityX = -2;    
    Riddler9.velocityX = -2;
    Riddler10.velocityX = -2;
    Gun1.velocityX = -2;
    Gun2.velocityX = -2;
    Gun3.velocityX = -2;
    Gun4.velocityX = -2;
    Gun5.velocityX = -2;
    Gun6.velocityX = -2;
    Gun7.velocityX = -2;
    Gun8.velocityX = -2;    
    Gun9.velocityX = -2;
    Gun10.velocityX = -2;
    Gun11.velocityX = -2;
    Gun12.velocityX = -2;
    Gun13.velocityX = -2;
    Gun14.velocityX = -2;
    Gun15.velocityX = -2;
    Gun16.velocityX = -2;
    Gun17.velocityX = -2;
    Gun18.velocityX = -2;    
    Gun19.velocityX = -2;
    Gun20.velocityX = -2;
  }
  
if(keyDown("UP_ARROW")){
  Batman.velocityY = -2;
}

if(keyDown("DOWN_ARROW")){
  Batman.velocityY = 2;
}
if(keyDown("LEFT_ARROW")){
  Batman.velocityX = -2;
}

if(keyDown("RIGHT_ARROW")){
  Batman.velocityX = 2;
}

  drawSprites();
}