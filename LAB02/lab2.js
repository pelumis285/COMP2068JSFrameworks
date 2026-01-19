// Import the prompt module
const prompt = require('prompt');

// Start the prompt
prompt.start();

console.log("Welcome to Rock, Paper, Scissors!");

// Define the input requirement
const schema = {
    properties: {
        userSelection: {
            description: 'Choose ROCK, PAPER, or SCISSORS',
            pattern: /^(rock|paper|scissors)$/i,
            message: 'Selection must be ROCK, PAPER, or SCISSORS',
            required: true,
            before: (value) => value.toUpperCase() // Convert input to uppercase
        }
    }
};

// Get the user's choice
prompt.get(schema, function (err, result) {
    if (err) { return console.log(err); }

    const userSelection = result.userSelection;

    // Use Math.random() to generate computerSelection
    const randomNum = Math.random();
    let computerSelection;

    // Logical ranges based on instructions
    if (randomNum >= 0 && randomNum <= 0.34) {
        computerSelection = "PAPER";
    } else if (randomNum >= 0.35 && randomNum <= 0.67) {
        computerSelection = "SCISSORS";
    } else {
        computerSelection = "ROCK";
    }

    // Display the choices
    console.log(`User Selection: ${userSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);

    // Determine the outcome
    if (userSelection === computerSelection) {
        console.log("It's a tie");
    } else if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "PAPER" && computerSelection === "ROCK") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        console.log("User Wins");
    } else {
        console.log("Computer Wins");
    }
});