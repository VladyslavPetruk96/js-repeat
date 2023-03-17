let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function writeOutput(operator, resultBeforeCulc, calcNumber) {
  const calcDescription = `${resultBeforeCulc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operator, resultBeforeCulc, calcNumber, result) {
  const logEntry = {
    operation: operator,
    prevResult: resultBeforeCulc,
    number: calcNumber,
    result: result,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  writeOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
