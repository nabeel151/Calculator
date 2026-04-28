let expression = "";
let isCalculated = false;
const exp1 = document.getElementById("expression");
const result1 = document.getElementById("result");


function append(value) {

  if (isCalculated) {
    expression = "";
    document.getElementById("result").innerText = "0";
    isCalculated = false;
  }
  
  let lastChar = expression.slice(-1);


  if ("+-*/".includes(value)) {


    if (expression === "") return;

  
    if ("+-*/".includes(lastChar)) {
      expression = expression.slice(0, -1) + value;
      updateDisplay();
      return;
    }
  }

  expression += value;
  updateDisplay();
}

function clearAll() {
  expression = "";
  document.getElementById("result").innerText = "0";
  isCalculated = false;
  updateDisplay();

}
function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();


}


function updateDisplay() {
  document.getElementById("expression").innerText = expression || "0";

}



function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("result").innerText = result;
    isCalculated = true;
  }
  catch {
    document.getElementById("result").innerText = "error";
    isCalculated = true;
  }


}
