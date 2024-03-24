#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to CodeWithMuneeba - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry, you guess a wrong number");
}
