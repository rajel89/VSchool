// var readlineSync = require('readline-sync')

// // var name = readlineSync.question("what is your name? ")
// // console.log("hellop " + name);



var readlineSync = require('readline-sync');

var Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;


   
    if (op === "A") {
        var result = x + y;
      } else if (op === "B") {
        var result = x - y;
      } else if (op === "C") {
        var result = x * y;
      } else if (op === "D") {
        var result = x / y;
      } else {
        var result = "Error!"
      }
  
      console.log("Result: " + result);
    };
  }
  
  var num1 = readlineSync.question("Please enter a number: ");
  var num2 = readlineSync.question("Please enter another number: ");
  var op = readlineSync.question("Please enter an operator: \n A to Add\n B to Sub\n C to Mul\n D to Div \n")

  
  var calc = new Calculation(num1, num2, op);
  
  calc.result();