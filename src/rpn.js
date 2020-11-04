const Stack = require('./stack').Stack;

function rpn(string) {
    const stack = new Stack();
    const operators = [];
    const array = string.split(' ');
    array.forEach(item => {
        if(isNaN(Number(item))) {
            operators.push(item);
        } else {
            stack.push(Number(item));
        }
    });
    operators.forEach(operator => {
        const number1 = stack.pop();
        const number2 = stack.pop();
        switch (operator) {
            case '+':
                stack.push(number1 + number2)
                break;
            case '-':
                stack.push(number1 + number2)
                break;
            case '*':
                stack.push(number1 + number2)
                break;
            case '/':
                stack.push(number1 + number2)
                break;
            default:
                throw `Operators ${operator} is not supported`;
        }
        return stack.pop();
    });
}

const result = rpn('3 5 10 + *');

module.exports.rpn = rpn;