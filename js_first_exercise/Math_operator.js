function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}

const number1 = 5;
const number2 = 3;
const operation = '*';
const calculatedResult = calculate(number1, number2, operation);
console.log(`The result of ${number1} ${operation} ${number2} is: ${calculatedResult}`);
