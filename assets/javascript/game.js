var randVal = 0;
var gamePick = document.getElementById("game-pick");
var winlossmsg = document.getElementById("win-loss-msg");
var wincountlabel = document.getElementById("win-label");
var wincount = document.getElementById("win-count");
var losscountlabel = document.getElementById("loss-label");
var losscount = document.getElementById("loss-count");
var totalscoremsg = document.getElementById("total-score-msg");
var totalscore = document.getElementById("total-score");


// JavaScript function that wraps everything


setRandomNumber();
//initialize wincount msg
wincountlabel.textContent = "Wins:  "
wincount.textContent = "0";
losscountlabel.textContent = "Losses: "
losscount.textContent = "0";
//gamePick.innerHTM;
totalscoremsg.textContent = "You total score is:"
totalscore.textContent = 0;

loadCrystals();

//initialize crystal value
function loadCrystals() {
    document.getElementById("crystal-1").alt = pickRandomNumForCrystal().toString();
    document.getElementById("crystal-2").alt = pickRandomNumForCrystal().toString();
    document.getElementById("crystal-3").alt = pickRandomNumForCrystal().toString();
    document.getElementById("crystal-4").alt = pickRandomNumForCrystal().toString();
} //end setCrystalRandomNum function

function setRandomNumber() {
    //set user nuber to guess 
    randVal = Math.floor(Math.random() * 120) + 18;
    console.log("Random value: " + randVal);
    gamePick.textContent = randVal.toString();
} //end pickRandomNumber function

function pickRandomNumForCrystal() {
    var randomVal = Math.floor(Math.random() * 12) + 1;
    return randomVal;
} //end pickRandomNumber function

$("#crystal-1").on("click", function() {
    var randNum = parseInt(document.getElementById("crystal-1").alt);
    crystalClicked(randNum);
    //alert("Ive been clicked");
    //get current players total
});

$("#crystal-2").on("click", function() {
    var randNum = parseInt(document.getElementById("crystal-2").alt);
    crystalClicked(randNum);
    //alert("Ive been clicked");
    //get current players total
});

$("#crystal-3").on("click", function() {
    var randNum = parseInt(document.getElementById("crystal-3").alt);
    crystalClicked(randNum);
    //alert("Ive been clicked");
    //get current players total
});

$("#crystal-4").on("click", function() {
    var randNum = parseInt(document.getElementById("crystal-4").alt);
    crystalClicked(randNum);
    //alert("Ive been clicked");
    //get current players total
});



function crystalClicked(randNum) {
    var newUserTotal = 0;
    var tempWinHolder = 0;
    var tempLossHolder = 0;
    var currentWinCount = 0;
    var currentLossCount = 0;
    var tempHolder = (document.getElementById("total-score").innerHTML);
    //console.log(tempHolder)
    newUserTotal = (Number(tempHolder)) + randNum;
    //console.log(newUserTotal);
    totalscore.textContent = newUserTotal;

    if (newUserTotal === randVal) {
        currentWinCount = parseInt((document.getElementById("win-count").innerHTML));
        tempWinHolder = (Number(currentWinCount)) + 1;
        // wincount.textContent = "Wins:    " + tempWinHolder.toString();
        wincount.textContent = tempWinHolder.toString();
        totalscore.textContent = "0";
        loadCrystals();
        setRandomNumber();
    } else
    if (newUserTotal > randVal) {
        //player just lost
        currentLossCount = parseInt((document.getElementById("loss-count").innerHTML));
        //console.log("currentLossCount = " + currentLossCount);
        tempLossHolder = (Number(currentLossCount)) + 1;
        //console.log(tempLossHolder);
        //losscount.textContent = "Losses: " + tempLossHolder.toString();
        losscount.textContent = tempLossHolder.toString();
        totalscore.textContent = "0";
        loadCrystals();
        setRandomNumber();
    }

} // end function crystalClicked()