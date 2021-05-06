var numbers = [];
var numberToCal = 0;
var result = 0;
var op = "";

function EnterNumber(number) {
  numbers.push(number);
  ShowNumberToLCD(number);
}

function ShowNumberToLCD(number) {
  document.getElementById("Answer").value += number;
}

function EnterOperator(operator) {
  clearLCD();
  numberToCal = parseFloat(numbers.join(""));
  if (numberToCal) {
    calResult(numberToCal, operator);
  }

  op = operator;
  numbers = [];
  numberToCal = 0;
}

function clearLCD() {
  document.getElementById("Answer").value = "";
}

function EnterEqual() {
  numberToCal = parseFloat(numbers.join(""));
  calResult(numberToCal, op);
  numbers = [];
  document.getElementById("Answer").value = result;
}

function calResult(number, operator) {
  switch (operator) {
    case "+":
      result === 0 ? (result = number) : (result += number);
      break;
    case "-":
      result === 0 ? (result = number) : (result -= number);
      break;
    case "*":
      result === 0 ? (result = number) : (result = result * number);
      break;
    case "/":
      result === 0 ? (result = number) : (result = result / number);
      break;
    default:
      break;
  }
}
function EnterClear() {
  clearLCD();
  result = 0;
  op = "";
}
