// All my buttons
const display = document.getElementById('display')
const numKeys = document.getElementsByClassName('btn-number')
const clear = document.getElementById('btn-clear')
const addKey = document.getElementsByClassName('btn-operator')[2]
const subtractKey = document.getElementsByClassName('btn-operator')[1]
const multiplyKey = document.getElementsByClassName('btn-operator')[0]
const divideKey = document.getElementsByClassName('btn-operator')[4]
const calculate = document.getElementsByClassName('btn-operator')[3]

const add = (a,b) => a + b;
// console.log(add(5,10))

const subtract = (a,b) => a - b;
// console.log(subtract(20,10))

const multiply = (a,b) => a * b;
// console.log(multiply(3,3))

const divide = (a, b) => a / b;
// console.log(divide(100,5))

function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
};
// Giving the user the default value of an empty string
let userInput = ''

// Adding the clicked numbers to my display
const chosenNum = (e) => {
  userInput = userInput + e.target.textContent
  const num1 = Number(userInput)

  if (userInput.length > 8){
    // do nothing (8 digit limit)
  } else {
   display.innerHTML = num1
  }
}

// Clearing displaying
const clearDisplay = () => {
  userInput = ''
  display.textContent = '0'
}

const test = () => {
  console.log('this button works')
}

// Using a for loop to grab each of my number keys
for (num of numKeys) {
  num.addEventListener('click', chosenNum);
}

// EventListeners
clear.addEventListener('click', clearDisplay)
addKey.addEventListener('click', test)
subtractKey.addEventListener('click', test)
multiplyKey.addEventListener('click', test)
divideKey.addEventListener('click', test)
calculate.addEventListener('click', test)