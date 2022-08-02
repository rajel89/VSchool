var numbers = [42, 13, 34, 18, 123]
var turtles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"]
var users = [
    {
        name: "Joe Schmoe",
        age: 42,
        gender: "Male"
    },
    {
        name: "Jill Schmoe",
        age: 41,
        gender: "Female",
        childrenAges: [8, 10, 12]
    },
    {
        name: "Jimmy Schmoe",
        age: 9,
        gender: "Male"
    }   
]

var disparateArr = ["Alice", 40, true, [8, 10, 12]]


//  QUIZ:
 
//  1. What is the purpose of arrays? Why do programmers care about them?
//       Collect multiple pieces of data together.



// 2. What are some differences between arrays and objects?
// Arrays are for gathering together many "things", and objects are best used to describe ONE thing in a lot more detail


// 3. How would you access the number 34 from the `numbers` array above? 
// See if you can log it to the console)

console.log(numbers[2])


// 4. What is the length of the `turtles` array? How would you access that length?

console.log(turtles.length)
 
  
// 5. Is it syntatically correct to have an array like `disparateArr`?

//The syntax is not wrong but it is not advisable to be utilized in such method simply because there's not enough information 
//that would explane what the other values are for. 
//It is best to make it an object instead of an Array.


 
// 6. What might be a better data structure to use for `disparateArr`?


// 7. How would you log Jill Schmoe's name to the console using the `users` array?
 
console.log(users[1].name)

