function add()
{
    var numOne, numTwo, sum;
    numOne = parseInt(document.getElementById("num1").value);
    numTwo = parseInt(document.getElementById("num2").value);
    sum = numOne + numTwo;
    document.getElementById("result").value = sum;
}
