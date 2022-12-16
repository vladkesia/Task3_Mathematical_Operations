let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');

let addition = (firstNumber * 1 + secondNumber * 1)
let subtraction = (firstNumber - secondNumber)
let multiplication = (firstNumber * secondNumber)
let division = (firstNumber / secondNumber)

alert(`\nКористувач ввів ${firstNumber} і ${secondNumber}:
${firstNumber} + ${secondNumber} = ${addition}\n 
${firstNumber} - ${secondNumber} = ${subtraction}\n 
${firstNumber} * ${secondNumber} = ${multiplication}\n 
${firstNumber} / ${secondNumber} = ${division.toFixed(1)}\n 
`)
