const player1Dice = parseInt(Math.random() * 6 + 1);
const comDice = parseInt(Math.random() * 6 + 1);

const playerImg = document.getElementById("img1");
playerImg.src = "images/dice" + player1Dice.toString() + ".png";

const comImg = document.getElementById("img2");
comImg.src = "images/dice" + comDice.toString() + ".png";

const result = document.getElementById("p-result")
if (player1Dice>comDice) {
    result.innerText = "Player 1 Win!"
} else if (player1Dice<comDice) {
    result.innerText = "Player 2 Win!"
} else  {
    result.innerText = "Draw!"
}

const restart = document.getElementsByClassName("btn")[0];

restart.addEventListener("click", () => {
    location.reload();
})