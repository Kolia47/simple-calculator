#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
const answers:{
    numberOne: number
    numberTwo: number
    operator: string    
} = await inquirer.prompt([
    {
        type: "input",
        name: "numberOne",
        message: "Enter the first number"
    },
    {
        type: "input",
        name: "numberTwo",
        message: "Enter the second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Enter the operator",
        choices: ["+", "-", "*", "/"]
    }
])

const {numberOne,numberTwo, operator} = answers;
let result

switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("Invalid number");
}
console.log(`${numberOne} ${operator} ${numberOne} = ${result}`);
