class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      baby = new Baby();
      var babyCountRef = await database.ref('babyCount').once("value");
      if(babyCountRef.exists()){
        babyCount = babyCountRef.val();
        baby.getCount();
      }
      form = new Form()
      form.display();
    }

    baby1 = createSprite(100,200);
    //car1.addImage("car1",car1_img);
    baby2 = createSprite(300,200);
    //car2.addImage("car2",car2_img);
    baby3 = createSprite(500,200);
    //car3.addImage("car3",car3_img);
    baby4 = createSprite(700,200);
    //car4.addImage("car4",car4_img);
    babies = [baby1, baby2, baby3, baby4];
  }

  play(){
    form.hide();
    
    Baby.getbabyInfo();
    //baby.getCarsAtEnd();
    
    if(allBabies !== undefined){
      background(255);
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var kid in allBabies){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allBabies[kid].distance;
        babies[index-1].x = x;
        babies[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === baby.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          babies[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = babies[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && baby.index !== null){
      baby.distance +=10
      baby.update();
    }

    if(baby.distance > 3860){
      gameState = 2;
      //baby.rank = baby.rank+1;

      //baby.updateCarsAtEnd(baby.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    //console.log(player.rank);
  }
}
