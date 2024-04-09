import inquirer from "inquirer";
const answers = await inquirer.prompt([
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
]);
const { numberOne, numberTwo, operator } = answers;
let result;
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
