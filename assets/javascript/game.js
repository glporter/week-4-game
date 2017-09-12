var randVal = 0;
var gamePick = document.getElementById("game-pick");
var winlossmsg = document.getElementById("win-loss-msg");
var wincountlabel = document.getElementById("win-label");
var wincount = document.getElementById("win-count");
var losscountlabel = document.getElementById("loss-label");
var losscount = document.getElementById("loss-count");
var totalscoremsg = document.getElementById("total-score-msg");
var totalscore = document.getElementById("total-score");


setRandomNumber();
//initialize wincount msg
wincount.textContent = "0";
losscount.textContent = "0";
//gamePick.innerHTM;
totalscoremsg.textContent = "You total score is:"
totalscore.textContent = 0;



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
    crystalClicked();
    //alert("Ive been clicked");
    //get current players total
});

$("#crystal-2").on("click", function() {
    crystalClicked();
    //alert("Ive been clicked");
    //get current players total
});

$("#crystal-3").on("click", function() {
    crystalClicked();
    //alert("Ive been clicked");
    //get current players total
});

$("#crystal-4").on("click", function() {
    crystalClicked();
    //alert("Ive been clicked");
    //get current players total
});



function crystalClicked() {
    var newUserTotal = 0;
    var tempLossHolder = 0;
    var currentLossCount = 0;
    var tempHolder = (document.getElementById("total-score").innerHTML);
    //console.log(tempHolder)
    newUserTotal = (Number(tempHolder)) + pickRandomNumForCrystal();
    //console.log(newUserTotal);
    totalscore.textContent = newUserTotal;

    if (newUserTotal > randVal) {
        //player just lost
        currentLossCount = (document.getElementById("loss-count").innerHTML);
        //console.log("currentLossCount = " + currentLossCount);
        tempLossHolder = (Number(currentLossCount)) + 1;
        //console.log(tempLossHolder);
        losscount.textContent = tempLossHolder.toString();
        totalscore.textContent = 0;
        setRandomNumber();
    }

} // end function crystalClicked()