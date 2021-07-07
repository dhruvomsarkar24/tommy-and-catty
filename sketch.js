 var canvas,bg;
 var together;
 var tom,jerry;
 var tomImage1,tomImage2,tomImage3,tomImage4;
 var jerryImage1,jerryImage2,jerryImage3,jerryImage4;

function preload() {
 bg = loadImage("garden.png");
 tomImage1 = loadAnimation("cat1.png");
 tomImage2 = loadAnimation("cat2.png");
 tomImage3 = loadAnimation("cat3.png");
 tomImage4 = loadAnimation("cat4.png");
 jerryImage1 = loadAnimation("mouse1.png");
 jerryImage2 = loadAnimation("mouse2.png");
 jerryImage3 = loadAnimation("mouse3.png");
 jerryImage4 = loadAnimation("mouse4.png");
 
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addAnimation(tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(870,600);
    jerry.addAnimation(jerryImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
     if(tom.x - jerry.x < (tom.width - jeery.width)/2){
       tom.velocityX = 0;
       tom.addAniamtion(tomImage3);
       tom.x =300;
       tom.scale=0.2;
       tom.changeAnimation(tomImage4);
       jerry.addImage(jerryImage4);
       jerry.scale=0.15;
       jerry.changeImage(jerryImage3);
     }
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
      jerry.AddAnimation("mouseTeasing",jerryImage2);
      jerry.changeAnimation(jerryImage3);
      jerry.frameDelay = 25;

      tom.velocityX=-5;
      tom.addImage(tomImage2);
      tom.changeAnimation(tomImage3);

  }
     


}
