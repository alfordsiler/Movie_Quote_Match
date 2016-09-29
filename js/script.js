$(document).ready(function(){

//Correct answer sound
var coin = document.createElement("audio");
    coin.src="mp3/coin.wav";
    coin.volume=0.3;
    coin.autoPlay=false;
    coin.preLoad=true;
//Incorrect answer sound
var doh = document.createElement("audio");
    doh.src="mp3/doh.mp3";
    doh.volume=0.3;
    doh.autoPlay=false;
    doh.preLoad=true;

// //?????? How to get the create the audio clip and then play with quote display
// var ants = document.createElement("audio");
//     ants.src="audio/centerforants.mp3";
//     ants.volume=0.20;
//     ants.autoPlay=false;
//     ants.preLoad=true;

  // var busy = document.createElement("audio");
  //   busy.src="audio/getbusy.mp3";
  //   busy.volume=0.20;
  //   busy.autoPlay=false;
  //   busy.preLoad=true;  

// function playClip(clipNumber) {
//     source.src="audio/"quotesArray1[playerOneTurn].audio;
//     source.volume=0.2;
//     source.autoPlay=false;
//     source.preLoad=true;
// }

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
var pic19 = $("#pic19");
var pic20 = $("#pic20");
var pic21 = $("#pic21");
var pic22 = $("#pic22");
var pic23 = $("#pic23");
var pic24 = $("#pic24");
var audio1 = $("#audio1");
var audio2 = $("#audio2");
var audio3 = $("#audio3");
var audio4 = $("#audio4");
var audio5 = $("#audio5");
var audio6 = $("#audio6");
var audio7 = $("#audio7");
var audio8 = $("#audio8");
var audio9 = $("#audio9");
var audio10 = $("#audio10");
var audio11 = $("#audio11");
var audio12 = $("#audio12");
var audio13 = $("#audio13");
var audio14 = $("#audio14");
var audio15 = $("#audio15");
var audio16 = $("#audio16");
var audio17 = $("#audio17");
var audio18 = $("#audio18");
var audio19 = $("#audio19");
var audio20 = $("#audio20");
var audio21 = $("#audio21");
var audio22 = $("#audio22");
var audio23 = $("#audio23");
var audio24 = $("#audio24");
var audio25 = $("#audio25");

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
    {quote:'"What is this, a center for ants?!?!?"', audio: "centerforants.mp3"},
    {quote: '"Get busy livin or get busy dyin...thats god damn right."', audio:"getbusy.mp3"},
    {quote:'"I tend to think of myself as a one-man wolf pack."', audio: "wolfpack.mp3"},
    {quote: '"The greatest trick the Devil ever pulled was convincing the world he didnt exist."', audio:"devil.mp3"},
    {quote:'"They have done studies, you know. 60% of the time, it works every time."', audio: "everytime.mp3"},
    {quote:'"I have nipples greg, could you milk me?"', audio: "nipples.mp3"},
    {quote: '"That rug really tied the room together, did it not?."', audio: "rug.mp3"},
    {quote:'"Once an idea has taken hold of the brain, its almost impossible to eradicate."', audio: "idea.mp3"},
    {quote:'"I know who I am! Im a dude playin a dude disguised as another dude!"', audio: "imadude.mp3"},
    {quote:'"I will look for you, I will find you, and I will kill you."', audio: "iwillfindyou.mp3"},
    {quote:'"The things you own end up owning you."', audio: "thingsownyou.mp3"},
    {quote:'"At my signal, unleash hell."', audio: "unleashhell.mp3"}
    ];
var quotesArray2 =
    [
    {quote: '"First you gotta do the Truffle Shuffle."', audio: "truffle.mp3"},
    {quote: '"Dodge this."', audio: "matrix"},
    {quote: '"I feel the need...the need for speed!"', audio: "needforspeed.mp3"},
    {quote: '"Excuse me...I believe you have my stapler."', audio:"stapler.mp3"},
    {quote: '"We got a German here who wants to die for his country! Oblige him!"', audio: "german.mp3"},
    {quote: '"Whatever I feel like I wanna do. GOSH!"', audio: "gosh.mp3"},
    {quote: '"Protection from what? Zee Germans?"', audio: "zeegermans.mp3"},
    {quote: '"So youre tellin me theres a chance...YEAH!"', audio: "chance.mp3"},
    {quote: '"Why so serious?"', audio: "serious.mp3"},
    {quote: '"Roads? Where we are going we dont need roads."', audio: "roads.mp3"},
    {quote: '"Mmmmm, that is a tasty burger!"', audio: "tastyburger.mp3"},
    {quote: '"Oooooooooow, Kelly Clarkson!"', audio: "kellyclarkson.mp3"}
    ];
//Game Timers
var timerInterval;
function timer(){
    var secs = 81;
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
    var secs = 81;
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
    playerOneScoreDisplay.empty().append("Player 1 Score: " + playerOneScore + " out of 12");
}
//Funcitont to append player 2 score to player two div display
function showPlayer2Score () {
    playerTwoScoreDisplay.empty().append("Player 2 Score: " + playerTwoScore + " out of 12");
}
//Function to show the next quote for player 1
function nextQuote1() {
    if (playerOneTurn < quotesArray1.length) {
        movieQuoteDisplay.empty().append("Quote " + quoteNumber() + ": " + quotesArray1[playerOneTurn].quote);
    } if (playerOneTurn == 0) {
        audio4[0].play();
    } if (playerOneTurn == 1) {
        audio4[0].pause();
        audio10[0].play();
    } if (playerOneTurn == 2) {
        audio10[0].pause();
        audio1[0].play();
    } if (playerOneTurn == 3) {
        audio1[0].pause();
        audio12[0].play();
    } if (playerOneTurn == 4) {
        audio12[0].pause();
        audio5[0].play();
    } if (playerOneTurn == 5) {
        audio5[0].pause();
        audio3[0].play();
    } if (playerOneTurn == 6) {
        audio3[0].pause();
        audio11[0].play();
    } if (playerOneTurn == 7) {
        audio11[0].pause();
        audio9[0].play();
    } if (playerOneTurn == 8) {
        audio9[0].pause();
        audio8[0].play();
    } if (playerOneTurn == 9) {
        audio8[0].pause();
        audio6[0].play();
    } if (playerOneTurn == 10) {
        audio6[0].pause();
        audio7[0].play();
    } if (playerOneTurn == 11) {
        audio7[0].pause();
        audio2[0].play();
    }   
};
// };
//Function to show the next quote for player 2
function nextQuote2() {
    if (playerTwoTurn < quotesArray2.length) {
        movieQuoteDisplay.empty().append("Quote " + quoteNumber2() + ": " + quotesArray2[playerTwoTurn].quote);
    } if (playerTwoTurn == 0) {
        audio20[0].play();
    } if (playerTwoTurn == 1) {
        audio20[0].pause();
        audio22[0].play();
    } if (playerTwoTurn == 2) {
        audio22[0].pause();
        audio24[0].play();
    } if (playerTwoTurn == 3) {
        audio24[0].pause();
        audio18[0].play();
    } if (playerTwoTurn == 4) {
        audio18[0].pause();
        audio14[0].play();
    } if (playerTwoTurn == 5) {
        audio14[0].pause();
        audio17[0].play();
    } if (playerTwoTurn == 6) {
        audio17[0].pause();
        audio15[0].play();
    } if (playerTwoTurn == 7) {
        audio15[0].pause();
        audio16[0].play();
    } if (playerTwoTurn == 8) {
        audio16[0].pause();
        audio23[0].play();
    } if (playerTwoTurn == 9) {
        audio23[0].pause();
        audio19[0].play();
    } if (playerTwoTurn == 10) {
        audio19[0].pause();
        audio21[0].play();
    } if (playerTwoTurn == 11) {
        audio21[0].pause();
        audio13[0].play();
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
    if (playerOneTurn > 11) {
        audio2[0].pause();
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
    alert("TIME'S UP PLAYER 1. PLAYER 2, IT'S YOUR TURN");
    clearTimer();
    playerTwoStartButton.show();
    timerDisplay.empty();
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
    pictureClickOne(pic10);
    pictureClickOne(pic11);
    pictureClickOne(pic12);
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
    pictureClickTwo(pic13);
    pictureClickTwo(pic14);
    pictureClickTwo(pic15);
    pictureClickTwo(pic16);
    pictureClickTwo(pic17);
    pictureClickTwo(pic18);
    pictureClickTwo(pic19);
    pictureClickTwo(pic20);
    pictureClickTwo(pic21);
    pictureClickTwo(pic22);
    pictureClickTwo(pic23);
    pictureClickTwo(pic24);
});
playerTwoNextButton.click(function() {
    playerTwoTurn++;
    nextQuote2();
    doh.play();
    endGame();
});
//Function to end game
function endGame() {
    if (playerTwoTurn > 11) {
        audio13[0].pause();
        audio25[0].play();
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
        audio13[0].pause();
        audio25[0].play();
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
hoverClip('#pic19', 'img/pic19.gif', 'img/pic19.jpg');
hoverClip('#pic20', 'img/pic20.gif', 'img/pic20.jpg');
hoverClip('#pic21', 'img/pic21.gif', 'img/pic21.jpg');
hoverClip('#pic22', 'img/pic22.gif', 'img/pic22.jpg');
hoverClip('#pic23', 'img/pic23.gif', 'img/pic23.jpg');
hoverClip('#pic24', 'img/pic24.gif', 'img/pic24.jpg');

});