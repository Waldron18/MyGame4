var player;
var score = 0;
var highScore = 0;
var gameState, START, PLAY, END;
var redBlocksGroup, greenBlocksGroup, blueBlocksGroup, purpleBlocksGroup;

function setup() {
  createCanvas(500, 500);

  START = 0;
  PLAY = 1;
  END = 2;
  gameState = START;

  player = createSprite(width / 2, height - 100, 40, 40);
  player.shapeColor = "white";

  redBlocksGroup = new Group();
  greenBlocksGroup = new Group();
  blueBlocksGroup = new Group();
  purpleBlocksGroup = new Group();

  startButton = createButton("START");
  startButton.position(width / 2 - 25, height / 2);
  startButton.mousePressed(() => {
    gameState = PLAY;
    startButton.hide();
  });

  resetButton = createButton("RESET");
  resetButton.position(width / 2 - 25, 10);
  resetButton.hide();
}

function draw() {
  background(0);

  if (gameState === PLAY) {
    play();
    scoreChanging();
  }

  if (score < 0 || score === 20) {
    gameState = END;
  }

  if (gameState === END) {
    
    fill("white");
    text("GAME OVER!!",200,250)
    resetButton.show();
    resetButton.mousePressed (function(){
      gameState = PLAY;
      redBlocksGroup.destroyEach();
      greenBlocksGroup.destroyEach();
      player.velocityX = 0;
      if(highScore < score){
        highScore = score;
      }
      score = 0;
      resetButton.hide();
    }
    ) 
  }

  console.log(gameState);
  drawSprites();

  textScores();
}
