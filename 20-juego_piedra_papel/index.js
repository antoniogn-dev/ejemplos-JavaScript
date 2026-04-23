const buttons = document.querySelectorAll("button")
const resultEl = document.getElementById("result")
const playerScoreEl = document.getElementById("user-score")
const computerScoreEl = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay())
        resultEl.innerText = result
        playerScoreEl.innerText = playerScore
        computerScoreEl.innerText = computerScore        
    })
})

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "it´s a tie!"
    } else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        playerScore++
        return "you Win! " + playerSelection + " beats " + computerSelection 
    } else {
        computerScore++
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }

}