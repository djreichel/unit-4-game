//Game js written with major influence from Alex Chalyy.

//Game begins with Target Score, Gamepiece values and Player Score at zero.
//As game starts, update variable scores to random values.
//As player clicks Gamepieces, add Gamepiece values to Player Score.
//When Player Score equals Target Score, add one point to Wins total.
//When Player Score exceeds Target Score, add one point to Loss totals.
//Reset Target Score, Gamepiece Values and Player Score after Win or Loss. 

//start game with all values at zero
var targetScore = 0;
var playerScore = 0;
var gamePiece1 = 0;
var gamePiece2 = 0;
var gamePiece3 = 0;
var gamePiece4 = 0;
var wins = 0;
var losses = 0;

// Update the variable score values with random values 
function newGame() {
    targetScore = Math.floor(Math.random() * 102) + 19; 
    playerScore = 0;
    gamePiece1 = Math.floor(Math.random() * 12) + 1;
    gamePiece2 = Math.floor(Math.random() * 12) + 1;
    gamePiece3 = Math.floor(Math.random() * 12) + 1;
    gamePiece4 = Math.floor(Math.random() * 12) + 1;

    $("#gamesWon").html(wins);
    console.log("Wins: " + wins);
    
    $("#gamesLost").html(losses);
    
    $("#targetScoreNumber").html(targetScore);
    console.log("targetScore: " + targetScore);

    $("#playerScoreNumber").html("0");
    console.log("gamePieceClick1 value: " + gamePiece1);
    console.log("gamePieceClick2 value: " + gamePiece2);
    console.log("gamePieceClick3 value: " + gamePiece3);
    console.log("gamePieceClick4 value: " + gamePiece4);
}

//This function playerScore and determines winning and losing.
function gamePlay()    {
        
        playerScore += gamePieceScore;
        console.log("Score: " + playerScore);
        if (playerScore == targetScore)    {
            console.log("You won!");
            wins++;
            newGame();
        }
        else if (playerScore > targetScore)    {
            console.log("You lost!");
            losses++;
            newGame();
        }
        else    {
            $("#playerScoreNumber").html("Total Score: " + playerScore);
        }
    }

    console.log("start new game before scoring begins");
    newGame();

    //This function scores points every time gamePiece1 is clicked.
    $("#gamepieceClick1").click(function()  {
        console.log("gamePiece1 was clicked.");
        scorePoint(gamePiece1);
    });

    //This function scores points every time gamePiece2 is clicked.
    $("#gamepieceClick2").click(function()  {
        console.log("gamePiece2 was clicked.");
        scorePoint(gamePiece2);
    });

    //This function scores points every time gamePiece3 is clicked.
    $("#gamepieceClick3").click(function()  {    
        console.log("gamePiece3 was clicked.");
        scorePoint(gamePiece3);
    });

    //This function scores points every time gamePiece4 is clicked.
    $("#gamepieceClick4").click(function()  {    
        console.log("gamepiece4 was clicked.");
        scorePoint(gamePiece4);
    });