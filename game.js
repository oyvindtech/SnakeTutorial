/**
 * Created by ØyvindMalin on 27.03.2017.
 */

var canvas;
var context;
var running = false;


var fps = 30;

var gameState =
    {
        gameRunning : false,
        direction : "none",
        snakeX : 300,
        snakeY : 300
    }
//styling
var font = " bold 40px Arial";
//initialization
var start = function ()
{

    setInterval(function ()
    {
        update();
        draw();
    }, 1000/fps)
}


var update = function ()
{
    if(gameState.snakeX == 601)
    {
        gameState.snakeX = 0;

    }

    if(gameState.snakeY == 601)
    {
        gameState.snakeY = 0;
    }

    if(gameState.snakeX == -1)
    {
        gameState.snakeX = 600;

    }

    if(gameState.snakeY == -1)
    {
        gameState.snakeY = 600;
    }

    if(gameState.gameRunning)
    {
        if(gameState.direction == "up")
        {
            gameState.snakeY--;
        }

        if(gameState.direction == "down")
        {
            gameState.snakeY++;
        }

        if(gameState.direction == "left")
        {
            gameState.snakeX--;
        }

        if(gameState.direction == "right")
        {
            gameState.snakeX++;
        }


    }


}
// drawloop
var draw = function ()
{
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    context.fillStyle = 'lime';
    context.fillRect(0,0,600,600);
    context.fillStyle = 'hotpink';
    context.fillRect(600,0, 400,600);

        context.fillStyle = "black";
        context.font = font;
        context.fillText("Snake", 610, 50,190)

    //draw player
    context.fillStyle = "black";
    context.fillRect(gameState.snakeX, gameState.snakeY, 10,10);

    //output status text
    context.fillText(gameState.direction, 610, 200,190);
    context.fillText(gameState.gameRunning, 610, 300,190);
    context.fillText(gameState.snakeX + ", " + gameState.snakeY, 610, 400,190);




}

document.addEventListener('keydown', function(event) {

    // up = 38
    // down = 40
    // left = 37
    // right = 39

    //space = 32

    if(event.keyCode == "38")
    {
        gameState.direction = "up";
    }


    if(event.keyCode == "40")
    {
        gameState.direction = "down";
    }

    if(event.keyCode == "37")
    {
        gameState.direction = "left";
    }

    if(event.keyCode == "39")
    {
        gameState.direction = "right";
    }

    if(event.keyCode == "32")
    {
        if(!gameState.gameRunning)
        {
            gameState.gameRunning = true;
        }

        else {
            gameState.gameRunning = false;
        }
    }
   console.log(event.keyCode);
});