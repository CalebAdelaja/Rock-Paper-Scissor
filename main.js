let playerScore = 0;
let computerScore = 0;
const choice = [
    {emojis: "✊", name: "Rock"},
    {emojis: "🤚", name: "Paper"},
    {emojis: "✂️", name: "Scissors"}
]

const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("Pscore").textContent = playerScore;
    document.getElementById("Cscore").textContent = computerScore;
    document.getElementById("player-view").textContent = "❓";
    document.getElementById("computer-view").textContent = "❓";
    document.querySelector(".result-text").textContent = "Make your move";
    document.getElementById("container").classList.remove("blur");
    winningState.style.display = "none";
});


const choicesBtn = document.querySelectorAll(".choice-btn")
const winningState = document.querySelector(".comp-winning-state");
choicesBtn.forEach((playerEmoji) => {
    playerEmoji.addEventListener("click", () => {
        let playChoice = playerEmoji.textContent
        console.log(playChoice)
        let comchoice = choice[Math.floor(Math.random() * choice.length)]
        console.log(comchoice.emojis)

        document.getElementById("player-view").textContent = playChoice;
        document.getElementById("computer-view").textContent = comchoice.emojis;

        const resultText = document.querySelector(".result-text")
        if(playChoice === comchoice.emojis) {
            resultText.textContent = "It's a tie! 🤝";
        }else if((playChoice === "✊" && comchoice.emojis === "✂️") ||
        (playChoice === "🤚" && comchoice.emojis === "✊") ||
                 (playChoice === "✂️" && comchoice.emojis === "🤚")) {
            resultText.textContent = "You win! 🎉";
            playerScore++;
        }else {
            resultText.textContent = "Computer wins!😩";
            computerScore++;
        }
        
        
        document.getElementById("Pscore").textContent = playerScore;
        document.getElementById("Cscore").textContent = computerScore;
        const mainPage = document.getElementById("container")
        
        // const playerWinHeadText = document.getElementById("win-headtext").textContent = "CONGRATIONS 🎉🎉🎉"
        // const playerWinText = document.getElementById("win-text").textContent = " You won the game "
        // const comWinHeadText = document.getElementById("win-headtext").textContent = "GAME OVER ❌❌"
        // const comWinText = document.getElementById("win-text").textContent = "Computer win the game, try more better next time"
        if(playerScore === 5) {
            // alert("Congratulations you wan the game 🎉🫡")
            mainPage.classList.add("blur");

            winningState.style.display = "flex";

            document.getElementById("win-headtext").textContent = "CONGRATULATIONS 🎉🎉🎉";
        

            document.getElementById("win-text").textContent = "You won the game!";
    
        } else if (computerScore === 5) {
            // alert("computer win the game, try more better")
            mainPage.classList.add("blur");

            winningState.style.display = "flex";

            document.getElementById("win-headtext").textContent = "GAME OVER ❌❌";

            document.getElementById("win-text").textContent = "Computer won the game. Try better next time.";
        }
    })
})
