var canvas, backgroundImage;

var gameState = 0;
var babyCount;
var allBabies;
var distance = 0;
var database;

var form, baby, game;

var babies, baby1, baby2, baby3, baby4, baby5;

//var track, car1_img, car2_img, car3_img, car4_img;

//function preload(){
  //track = loadImage("../images/track.jpg");
  //car1_img = loadImage("../images/car1.png");
  //car2_img = loadImage("../images/car2.png");
  //car3_img = loadImage("../images/car3.png");
  //car4_img = loadImage("../images/car4.png");
  //ground = loadImage("../images/ground.png");
//}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(babyCount === 5){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
