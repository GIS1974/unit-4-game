var crystal1 = randomInteger();
var crystal2 = randomInteger();
var crystal3 = randomInteger();
var crystal4 = randomInteger();
var randomNumber5 = Math.floor(Math.random() * 102) + 19;
var crystalSum = 0;
var winCount = 0;
var lossCount = 0;

$("#randomNumber").text("Magic Number: " + randomNumber5);

function randomInteger() {
    return Math.floor(Math.random() * 12 + 1);
}

function reset() {
    crystalSum = 0;
    crystal1 = randomInteger();
    crystal2 = randomInteger();
    crystal3 = randomInteger();
    crystal4 = randomInteger();
    randomNumber5 = Math.floor(Math.random() * 102) + 19;
    crystalSum = 0;
    $("#randomNumber").text("Magic Number: " + randomNumber5);
    $("#crystalSum").text("Sum of Crystals: ");
}

function RockNCrystals(rock) {
    crystalSum = crystalSum + rock;
    $("#crystalSum").text("Sum of Crystals: " + crystalSum);

    if (crystalSum == randomNumber5) {
        winCount++;
        reset();
        $("#wins").text("Wins: " + winCount);
    }

    if (crystalSum > randomNumber5) {
        lossCount++;
        reset();
        $("#loses").text("Loses: " + lossCount);
    }

}

$("#crystal1").click(
    function () {
        RockNCrystals(crystal1)
    }
)

$("#crystal2").click(
    function () {
        RockNCrystals(crystal2)
    }
)

$("#crystal3").click(
    function () {
        RockNCrystals(crystal3)
    }
)

$("#crystal4").click(
    function () {
        RockNCrystals(crystal4)
    }
)