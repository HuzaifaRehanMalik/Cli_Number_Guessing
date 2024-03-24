#! /usr/bin/env node 

import inquirer from "inquirer";
const answers = await inquirer.prompt([
{
    name:"userGuessedNumber"
    ,type:"number"
    ,message:"Kindly enter any number between 1 to 10:"
}
]);
const randomNumber = Math.floor(Math.random()*10+1 );
if(randomNumber === answers.userGuessedNumber){
    console.log("You guessed the number");
}else{
    console.log("You guessed the wrong number");
    console.log(`The number is ${randomNumber}`);
    
}
