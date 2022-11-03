const display = document.getElementById('display')
const numKeys = document.getElementsByClassName('btn-number')


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

const pressedButtons = (e) => {
  console.log('This button works ' + e.target.textContent)
}

for (num of numKeys) {
  num.addEventListener('click', pressedButtons);
}