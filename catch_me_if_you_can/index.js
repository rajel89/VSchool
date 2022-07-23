



//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type "number".

let total = sum(4, 4);

function sum (x ,y){
    //check data type first and throw error
   
    return x + y;

}

console.log(total)



//1b) Call the sum function inside a try block using "1" and "2" as arguments. 
//Use console.log within a catch block to inform the user of the error.







//2a) Given a user object, write a function called login that takes a username and password as parameters. 
//Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"



var user = {username: "sam", password: "123abc"};
function login(username, password){
    

// }
// console.log(login)





//2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones.
//Make sure you see the appropriate message!