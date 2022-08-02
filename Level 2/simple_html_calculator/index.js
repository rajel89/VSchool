function addBy() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("addNum1").value);
  numTwo = parseInt(document.getElementById("addNum2").value);
  sum = numOne + numTwo;
  document.getElementById("addResult").value = sum;
}

function multiplyBy() {
  num1 = document.getElementById("multNum1").value;
  num2 = document.getElementById("multNum2").value;
  document.getElementById("multResult").value = num1 * num2;
}

function subBy() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("subNum1").value);
  numTwo = parseInt(document.getElementById("subNum2").value);
  sum = numOne - numTwo;
  document.getElementById("subResult").value = sum;
}
