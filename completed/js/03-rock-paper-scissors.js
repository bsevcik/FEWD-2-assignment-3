function rps() {
    var usersChoice = prompt("rock, paper, or scissors?");
    var compChoice;
    if (usersChoice != "rock" && usersChoice != "paper" && usersChoice != "scissors") {
        alert("You must type rock, paper, or scissors with no caps");
    } else {
        var randrps = Math.random();
        if (randrps <= .333) {
            compChoice = "rock";
        } else if (randrps <= .667) {
            compChoice = "paper";
        } else {
            compChoice = "scissors";
        }
        if (usersChoice == compChoice) {
            alert("you chose " + usersChoice + ", but so did the computer. It's a draw!");
        } else if (usersChoice == "rock" && compChoice == "scissors") {
            alert("you chose " + usersChoice + ", and the computer chose scissors. You win!");
        } else if (compChoice == "rock" && usersChoice == "scissors") {
            alert("you chose " + usersChoice + ", but the computer chose scissors. You lose!");
        } else {
            alert("You chose " + usersChoice + " and the computer chose " + compChoice);
        }
    
}}