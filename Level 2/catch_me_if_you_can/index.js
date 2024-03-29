//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type "number".

function isNumber(num) {
  //check data type first and throw error
  if (typeof num === "number") {
    return num - num === 0;
  }
  return false;
}


function sum(x, y) {
  if (!isNumber(x) || !isNumber(y)) {
    throw new Error("error, input is not a number");
  }
  return x + y;
}




//1b) Call the sum function inside a try block using "1" and "2" as arguments.
//Use console.log within a catch block to inform the user of the error.
try {
  let total = sum(4, 8); // <---- enter number value here
  console.log(total);
} catch (err) {
  console.log(err.message);
}
try {
  let total = sum("4", 4);
  console.log(total);
} catch (err) {
  console.log(err.message);
}

//2a) Given a user object, write a function called login that takes a username and password as parameters.
//Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"


var user = { userName: "sam", passWord: "123abc" };
function login(userName, passWord) {
    if(!userName === "" || passWord === "user")
  
    throw new Error("Wrong user name and password")

    

}


//2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones.
//Make sure you see the appropriate message!

