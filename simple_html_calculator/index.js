
function add()
{
    var numOne, numTwo, sum;
    numOne = parseInt(document.getElementById("num1").value);
    numTwo = parseInt(document.getElementById("num2").value);
    sum = numOne + numTwo;
    document.getElementById("addResult").value = sum;
}

function multiplyBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("multResult").value = num1 * num2;
}