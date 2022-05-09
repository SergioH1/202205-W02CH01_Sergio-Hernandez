const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const temporalResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLastNumber = document.querySelector(".last-number-clear");
let displaySecondOperator = "";
let displayOperator = "";
let result = null;
let Operation = "";
let haveDecimal = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDecimal) {
      haveDecimal = true;
    } else if (e.target.innerText === "." && haveDecimal) {
      return;
    }// bucle para ir comprobando si hay coma 
    displayOperator += e.target.innerText; //Concateno los operadores
    display2.innerText = displayOperator; 
  });
});
// funcion para limpiar
function clearVar(name = "") {
  displaySecondOperator += displayOperator + " " + name + " ";
  display1.innerText = displaySecondOperator;
  display2.innerText = "";
  displayOperator = "";
  temporalResult.innerText = result;
  haveDecimal=false
}
// operadores matematicos 
function mathOperation() {
  if (Operation === "x") {
    result = parseFloat(result) * parseFloat(displayOperator);
  } else if (Operation === "+") {
    result = parseFloat(result) + parseFloat(displayOperator);
  } else if (Operation === "-") {
    result = parseFloat(result) - parseFloat(displayOperator);
  } else if (Operation === "/") {
    result = parseFloat(result) / parseFloat(displayOperator);
    }
}
// boton igual 
equal.addEventListener("click", () => {
  if (!displayOperator || !displaySecondOperator) return; // comprobacion si hay dos operadores
  haveDecimal = false; // retorno de boleeano a 
  mathOperation();
  clearVar();
  display2.innerText = result;
  temporalResult.innerText = "";
  displayOperator = result;
  displaySecondOperator = "";
});
// Boton Ac
clearAll.addEventListener("click", () => {
  displaySecondOperator = "";
  displayOperator = "";
  display1.innerText = "";
  display2.innerText = "";
  result = ""; //limpiar result para vaciar el display
  temporalResult.innerText = "";
});
// boton retroceder
clearLastNumber.addEventListener("click", () => {
  display2.innerText = "";
  displayOperator = "";
});
//funcion principal 
operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
      if (!displayOperator) return;
      haveDecimal = false;
      const operationName = e.target.innerText;
      if (displaySecondOperator && displayOperator && Operation) {
        mathOperation();
      } else {
        result = parseFloat(displayOperator);
      }
      clearVar(operationName);
      Operation = operationName;
     
    });
  });
  