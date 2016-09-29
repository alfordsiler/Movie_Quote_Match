$(document).ready(function(){

var doh = document.createElement("audio");
    doh.src="mp3/doh.mp3";
    doh.volume=0.20;
    doh.autoPlay=false;
    doh.preLoad=true;

var coin = document.createElement("audio");
    coin.src="mp3/coin.wav";
    coin.volume=0.20;
    coin.autoPlay=false;
    coin.preLoad=true;

//List of variables
var instructions = $("#instructionsModal");
var instructionsButton = $("#instructionsButton");
var close = $("#instructionsClose");
var playerOneStartButton = $("#playerOneStartButton");
var playerTwoStartButton = $("#playerTwoStartButton");
var startButton = $("#startButton");
var backButton = $("#backButton");
var movieQuoteDiv = $("#movieQuoteDiv");
var movieQuoteDisplay = $("#movieQuoteDisplay");
var timerDiv = $("#timerDiv");
var timerDisplay = $("#timerDisplay");
var timerInterval;
var playerOneScoreDisplay = $("#playerOneScoreDisplay");
var playerTwoScoreDisplay = $("#playerTwoScoreDisplay")
var nextButton = $("#nextButton");
var playerTwoNextButton = $("#playerTwoNextButton");
var backButton = $("#backButton");
var playerOneDiv = $(".playerOne");
var playerTwoDiv = $(".playerTwo");
var resetButton = $("#resetButton");
var modalStart = $("#modalStart");
var pic1 = $("#pic1");
var pic2 = $("#pic2");
var pic3 = $("#pic3");
var pic4 = $("#pic4");
var pic5 = $("#pic5");
var pic6 = $("#pic6");
var pic7 = $("#pic7");
var pic8 = $("#pic8");
var pic9 = $("#pic9");
var pic10 = $("#pic10");
var pic11 = $("#pic11");
var pic12 = $("#pic12");
var pic13 = $("#pic13");
var pic14 = $("#pic14");
var pic15 = $("#pic15");
var pic16 = $("#pic16");
var pic17 = $("#pic17");
var pic18 = $("#pic18");
//Modal to display game instructions
instructionsButton.click(function(){
    instructions.css("display", "block");
});
close.click(function() {
    instructions.css("display", "none")
});
$(document).click(function(event){
    if (event.target == instructions) {
        instructions.css("display", "none");
    } 
});
//Data
var quotesArray1 = 
    [
    {quote:'"What is this, a center for ants?!?!?"', title: "zoolander"},
    {quote:'"I know who I am! Im a dude playin a dude disguised as another dude!"', title: "tropicthunder"},
    {quote:'"I have nipples greg, could you milk me?"', title: "meettheparents"},
    {quote:'"I tend to think of myself as a one-man wolf pack."', title: "hangover"},
    {quote:'"They have done studies, you know. 60% of the time, it works every time."', title: "anchorman"},
    {quote:'"At my signal, unleash hell."', title: "gladiator"},
    {quote:'"Once an idea has taken hold of the brain, its almost impossible to eradicate."', title: "inception"},
    {quote:'"I will look for you, I will find you, and I will kill you."', title: "taken"},
    {quote:'"The things you own end up owning you."', title: "fightclub"}
    ];
var quotesArray2 =
    [
    {quote: '"Oooooooooow, Kelly Clarkson!"', title: "40yearold"},
    {quote: '"So youre tellin me theres a chance."', title: "dumb"},
    {quote: '"That rug really tied the room together, did it not?."', title:"biglebowski"},
    {quote: '"The greatest trick the Devil ever pulled was convincing the world he didnt exist."', title:"usualsuspects"},
    {quote: '"Excuse me i Believe you have my stapler."', title:"officespace"},
    {quote: '"I guess it comes down to one choice really.  Get busy livin or get busy dyin."', title:"shawshank"},
    {quote: '"Protection from what? Zee Germans?"', title: "snatch"},
    {quote: '"Whatever I feel like I wanna do. GOSH!"', title: "napoleon"},
    {quote: '"We got a German here who wants to die for his country! Oblige him!"', title: "inglorious"}
    ];
//Game Timers
var timerInterval;
function timer(){
    var secs = 51;
    timerInterval = setInterval(function(){ 
        secs--; 
        timerDisplay.empty().append("Timer: " + secs);
        if (secs == 0) {
            clearInterval(timerInterval);
            timesUp();
        } else if (secs <= 10) {
            timerDisplay.css("color", "red");
        } 
    }, 1000);
};
function timer2(){
    var secs = 51;
    timerDisplay.css("color", "white");
    timerInterval = setInterval(function(){ 
        secs--; 
        timerDisplay.empty().append("Timer: " + secs);
        if (secs == 0) {
            clearInterval(timerInterval);
            endGameOnTime();
        } else if (secs <= 10) {
            timerDisplay.css("color", "red");
        } 
    }, 1000);
};
//Function to clear timer interval
function clearTimer() {
    clearInterval(timerInterval);
};
//Start Game variables
var playerOneTurn = -1;
var playerOneScore = 0;
var playerTwoTurn = -1;
var playerTwoScore = 0;

//Function to append player 1 score to player one div display
function showPlayer1Score () {
    playerOneScoreDisplay.empty().append("Player 1 Score: " + playerOneScore + " out of 9");
}
//Funcitont to append player 2 score to player two div display
function showPlayer2Score () {
    playerTwoScoreDisplay.empty().append("Player 2 Score: " + playerTwoScore + " out of 9");
}
//Function to show the next quote for player 1
function nextQuote1() {
    if (playerOneTurn < quotesArray1.length) {
        movieQuoteDisplay.empty().append("Quote " + quoteNumber() + ": " + quotesArray1[playerOneTurn].quote);
    };
};
//Function to show the next quote for player 2
function nextQuote2() {
    if (playerTwoTurn < quotesArray2.length) {
        movieQuoteDisplay.empty().append("Quote " + quoteNumber2() + ": " + quotesArray2[playerTwoTurn].quote);
    };
};
//Functions to display quote numbers that append to the display
function quoteNumber () {
     return playerOneTurn + 1;
};
function quoteNumber2 () {
     return playerTwoTurn + 1;
};
//Function to set each picture to listen for click and compare to the quote displayed for player one
function pictureClickOne (picNumber) {
    picNumber.click(function(){
       if ($(this).attr('class') == quotesArray1[playerOneTurn].quote) {
            playerOneScore++;
            playerOneTurn++;
            nextQuote1();
            $(this).css('cursor', 'default');
            $(this).css('visibility', 'hidden');
            coin.play();
            picNumber.off('click');
        } else {
            ($(this).attr('class') !== quotesArray1[playerOneTurn].quote);
            playerOneTurn++;
            nextQuote1();
            $(this).css('cursor', 'default');
            $(this).css('visibility', 'hidden');
            doh.play();
            picNumber.off('click');
        };
        showPlayer1Score();
        switchPlayer();
    });
};
//Function to set each picture to listen for click and compare to the quote displayed for player two
function pictureClickTwo (picNumber2) {
    picNumber2.click(function(){
       if ($(this).attr('class') == quotesArray2[playerTwoTurn].quote) {
            playerTwoScore++;
            playerTwoTurn++;
            nextQuote2();
            $(this).css('cursor', 'default');
            $(this).css('visibility', 'hidden');
            coin.play();
            picNumber2.off('click');
        } else if ($(this).attr('class') !== quotesArray2[playerTwoTurn].quote) {
            playerTwoTurn++;
            nextQuote2();
            $(this).css('cursor', 'default');
            $(this).css('visibility', 'hidden');
            doh.play();
            picNumber2.off('click');
        };
        showPlayer2Score();
        endGame();
    });
};
//Function to switch players turns
function switchPlayer() {
    if (playerOneTurn > 8) {
        alert("Player 2's Turn");
        clearTimer();
        playerTwoStartButton.show();
        timerDisplay.empty();
        playerOneDiv.hide();
        playerTwoDiv.show();
        nextButton.hide();
        movieQuoteDisplay.empty();
    }
};
//Function to run if the time runs out
function timesUp() {
    playerTwoStartButton.show();
    alert("TIME'S UP PLAYER 1. PLAYER 2, IT'S YOUR TURN");
    clearTimer();
    timerDisplay.hide();
    playerOneDiv.hide();
    playerTwoDiv.show();
    nextButton.hide();
    movieQuoteDisplay.empty();
};
//Start the game for Player One after clicking on Start
playerOneStartButton.click(function() {
    playerOneTurn++;
    movieQuoteDiv.fadeIn();
    nextQuote1();
    timer();
    playerOneStartButton.hide();
    nextButton.show();
    pictureClickOne(pic1);
    pictureClickOne(pic2);
    pictureClickOne(pic3);
    pictureClickOne(pic4);
    pictureClickOne(pic5);
    pictureClickOne(pic6);
    pictureClickOne(pic7);
    pictureClickOne(pic8);
    pictureClickOne(pic9);
});
nextButton.click(function() {
    playerOneTurn++;
    nextQuote1();
    doh.play();
    switchPlayer();
});
//Start the game for Player Two after clicking on Start
playerTwoStartButton.click(function(){
    playerTwoTurn++;
    nextQuote2();
    timer2();
    playerTwoStartButton.hide();
    playerTwoNextButton.show();
    timerDisplay.show();
    pictureClickTwo(pic10);
    pictureClickTwo(pic11);
    pictureClickTwo(pic12);
    pictureClickTwo(pic13);
    pictureClickTwo(pic14);
    pictureClickTwo(pic15);
    pictureClickTwo(pic16);
    pictureClickTwo(pic17);
    pictureClickTwo(pic18);
});
playerTwoNextButton.click(function() {
    playerTwoTurn++;
    nextQuote2();
    doh.play();
    endGame();
});
//Function to end game
function endGame() {
    if (playerTwoTurn > 8) {
        clearTimer();
        playerTwoDiv.hide();
        playerTwoNextButton.hide();
        movieQuoteDisplay.empty();
        resetButton.show();
        timerDisplay.hide();
        displayWinner();
    }
};
function endGameOnTime() {
        playerTwoDiv.hide();
        playerTwoNextButton.hide();
        movieQuoteDisplay.empty();
        resetButton.show();
        timerDisplay.hide();
        displayWinnerTimesUp();
};
//Function to display winner
function displayWinner(){
    if (playerOneScore > playerTwoScore) {
        alert("PLAYER 1 WINS!");
    }
    else if (playerTwoScore > playerOneScore) {
        alert("PLAYER 2 WINS!");
    } else {
        alert("IT'S A TIE! HOW LAME!");
    }
};
//Function to display winner if times runs out
function displayWinnerTimesUp(){
    if (playerOneScore > playerTwoScore) {
        alert("TIME'S UP! PLAYER 1 WINS!");
    }
    else if (playerTwoScore > playerOneScore) {
        alert("TIME'S UP! PLAYER 2 WINS!");
    } else {
        alert("TIME'S UP! IT'S A TIE! HOW LAME!");
    }
};
// Show the GIF when image is hovered on
function hoverClip(idName, newSource, oldSource) {
    $(idName).hover(function(){
        $(this).attr('src', newSource);
    }, function () {
        $(this).attr('src', oldSource);
    });
};
hoverClip('#pic1', 'img/pic1.gif', 'img/pic1.jpg');
hoverClip('#pic2', 'img/pic2.gif', 'img/pic2.jpg');
hoverClip('#pic3', 'img/pic3.gif', 'img/pic3.jpg');
hoverClip('#pic4', 'img/pic4.gif', 'img/pic4.jpg');
hoverClip('#pic5', 'img/pic5.gif', 'img/pic5.jpg');
hoverClip('#pic6', 'img/pic6.gif', 'img/pic6.jpg');
hoverClip('#pic7', 'img/pic7.gif', 'img/pic7.jpg');
hoverClip('#pic8', 'img/pic8.gif', 'img/pic8.jpg');
hoverClip('#pic9', 'img/pic9.gif', 'img/pic9.jpg');
hoverClip('#pic10', 'img/pic10.gif', 'img/pic10.jpg');
hoverClip('#pic11', 'img/pic11.gif', 'img/pic11.jpg');
hoverClip('#pic12', 'img/pic12.gif', 'img/pic12.jpg');
hoverClip('#pic13', 'img/pic13.gif', 'img/pic13.jpg');
hoverClip('#pic14', 'img/pic14.gif', 'img/pic14.jpg');
hoverClip('#pic15', 'img/pic15.gif', 'img/pic15.jpg');
hoverClip('#pic16', 'img/pic16.gif', 'img/pic16.jpg');
hoverClip('#pic17', 'img/pic17.gif', 'img/pic17.jpg');
hoverClip('#pic18', 'img/pic18.gif', 'img/pic18.jpg');

});