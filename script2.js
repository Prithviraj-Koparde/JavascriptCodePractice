// Rock Paper Scissors Game computer vs player

function rps(player, computer){
    if (player === computer) return "Draw";

    if (player === "rock" && computer === "scissors") return "Player Wins";
    if (player === "paper" && computer === "rock") return "Player Wins";
    if (player === "scissors" && computer === "paper") return "Player Wins";

    return "Computer Wins";
}

let player = prompt("Enter rock, paper or scissors:");
let computer = prompt("Enter rock paper or scissors:");
console.log(rps(player, computer));

//console.log(rps("rock", "scissors"));