// All my buttons
const display = document.getElementById('display')
const clear = document.getElementById('btn-clear')
const numKeys = document.getElementsByClassName('btn-number')
const addKey = document.getElementsByClassName('btn-operator')[2]
const subtractKey = document.getElementsByClassName('btn-operator')[1]
const multiplyKey = document.getElementsByClassName('btn-operator')[0]
const divideKey = document.getElementsByClassName('btn-operator')[4]
const calculate = document.getElementsByClassName('btn-operator')[3]

// Mathmatic expressions
const add = (a, b) => parseFloat(a) + parseFloat(b);
const subtract = (a, b) => parseFloat(a) - parseFloat(b);
const multiply = (a, b) => parseFloat(a) * parseFloat(b);
const divide = (a, b) => parseFloat(a) / parseFloat(b);

// Function for choosing which expression to apply to the numbers
function operate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
    }
};

// Giving the user the default value of an empty string
let userInput = ''

// Adding the clicked numbers to my display
const chosenNum = (e) => {
  userInput = userInput + e.target.textContent
 // if the first inputed number is 0 then it wont take a spot in the display
  if (userInput[0] === '0'){
    userInput = ''
  }
  if (userInput === '.' && display.innerHTML.indexOf('.') > -1) {
    userInput = '';
  }

  const chosenNumInput = userInput
  
  if (userInput.length > 8){
    // do nothing (8 digit limit)
  } else {
   display.textContent = Number(chosenNumInput)
  }
}
// Creating function create num1 and choose the operator and store those values
const operation = (e) => {
    num1 = display.textContent
    parseInt(num1)
    console.log(`this is num1: ${num1}`)
    operator = e.target.textContent
    console.log(operator)
    userInput = ''
}
// Function for creating num2 once the equal sign is pressed and then calculating num1 and num2
 const result = () => {
    num2 = display.textContent
    parseInt(num2)
    console.log(`this is num2: ${num2}`)
    operatorTest = operate(num1, num2, operator)
    console.log(operatorTest)
    display.textContent = operatorTest
    userInput = ''
}

// Clearing displaying
const clearDisplay = () => {
  userInput = ''
  display.textContent = '0'
  num1 = undefined
  num2 = undefined
}

// Using a for loop to grab each of my number keys
for (num of numKeys) {
  num.addEventListener('click', chosenNum);
}

// EventListeners
clear.addEventListener('click', clearDisplay)
addKey.addEventListener('click', operation)
subtractKey.addEventListener('click', operation)
multiplyKey.addEventListener('click', operation)
divideKey.addEventListener('click', operation)
calculate.addEventListener('click', result)