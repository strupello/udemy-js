const defaultResult = 0;
let currentResult = defaultResult;

function add (num1, num2 ) {
    const result = num1 + num2;
    return result;
}


currentResult = add (5, 4);

let calculationDescripiton = `(${defaultResult} + 10 * 10) + 14 + 25`;


outputResult(currentResult, calculationDescripiton);
