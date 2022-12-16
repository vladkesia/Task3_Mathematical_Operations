let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');

let addition = (firstNumber * 1 + secondNumber * 1)
let subtraction = (firstNumber - secondNumber)
let multiplication = (firstNumber * secondNumber)
let division = (firstNumber / secondNumber)

alert(`Користувач ввів ${firstNumber} і ${secondNumber}:
${firstNumber} + ${secondNumber} = ${addition}
${firstNumber} - ${secondNumber} = ${subtraction} 
${firstNumber} * ${secondNumber} = ${multiplication} 
${firstNumber} / ${secondNumber} = ${division.toFixed(1)}
`)
