const calculate=(operand1, operand2, operator) => {
    let result=null;

    switch(operator){
        case '+':
            result=operand1+operand2;
            break;

            case '-':
            result=operand1-operand2;
            break;

            case '*':
            result=operand1*operand2;
            break;

            case '/':
            result=operand1/operand2;
            break;
    }

    return{
        operand1, operand2, operator, result,
    }
}

console.log(calculate(2, 3, '+'));
console.log(calculate(10, 5,  '-'));
console.log(calculate(5, 5, '*'));
console.log(calculate(12, 2, '/'));