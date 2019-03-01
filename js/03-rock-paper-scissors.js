function rps() {
    var usersChoice = prompt("rock, paper, or scissors?");
    var compChoice;
    if (usersChoice != "rock" && usersChoice != "paper" && usersChoice != "scissors") {
        alert("You must type rock, paper, or scissors with no caps and no punctuation");
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
            alert("You chose " + usersChoice + ", but so did the computer. \nIt's a draw!");
            console.log(usersChoice, compChoice);
        } else if (usersChoice == "rock" && compChoice == "scissors") {
            alert("You chose " + usersChoice + ", and the computer chose scissors. \nRock Smashes Scissors so You Win!");
            console.log(usersChoice, compChoice);
        } else if (compChoice == "rock" && usersChoice == "scissors") {
            alert("You chose " + usersChoice + ", but the computer chose rock. \nRock Smashes Scissors so You lose!");
            console.log(usersChoice, compChoice);
        } else if (usersChoice == "rock" && compChoice == "paper") {
            alert("You chose " + usersChoice + ", and the computer chose paper. \n Paper Suffocates Rock so You lose!");
            console.log(usersChoice, compChoice);
        } else if (compChoice == "rock" && usersChoice == "paper") {
            alert("You chose " + usersChoice + ", but the computer chose paper. \nPaper Suffocates Rock so You Win!");
            console.log(usersChoice, compChoice);
        } else if (usersChoice == "scissors" && compChoice == "paper") {
            alert("You chose " + usersChoice + ", and the computer chose paper. \nScissors Shred Paper so You Win!");
            console.log(usersChoice, compChoice);
        } else if (compChoice == "scissors" && usersChoice == "paper") {
            alert("You chose " + usersChoice + ", but the computer chose paper. \nScissors Shred Paper so You Lose!");
            console.log(usersChoice, compChoice);
        }
        
        
        

    
    }
    var play = prompt("Play again? (y/n)");
    if (play == 'y') {
        rps();r
    }
}
