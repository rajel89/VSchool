//1) Given an array of numbers, return a new array that has only the 
//numbers that are 5 or greater.


function fiveAndGreaterOnly(arr){
    //your code here

    let newNumber = arr.filter (fiveAndGreaterOnly => fiveAndGreaterOnly >= 5)
    return newNumber

}



//test

console.log(fiveAndGreaterOnly([3,6,8,2])); ///[6,8]