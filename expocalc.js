import inquirer from "inquirer";
const numOne = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Enter a number",
});
const numTwo = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Enter a second number",
});
let total = numOne.num1 ** numTwo.num2;
console.log(total);
