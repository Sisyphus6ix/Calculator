// All my buttons
const display = document.getElementById('display')
const numKeys = document.getElementsByClassName('btn-number')
const clear = document.getElementById('btn-clear')

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
  const parsedValue = parseInt(userInput, 10)
  display.textContent = parsedValue 
}

// Clearing displaying
const clearDisplay = () => {
  userInput = ''
  display.textContent = '0'
}

// Using a for loop to grab each of my number keys
for (num of numKeys) {
  num.addEventListener('click', chosenNum);
}

// EventListeners
clear.addEventListener('click', clearDisplay)