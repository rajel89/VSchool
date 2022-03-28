
// console.log("<--------------------------->")
// console.log("//# **Preliminaries**")
// //# **Preliminaries**
// //1. Write a for loop that prints to the console the numbers 0 through 9.
// console.log("1. Write a for loop that prints to the console the numbers 0 through 9.")

// for (var i = 0; i <= 9; i++){
//     console.log(i);
// }


// console.log("2. Write a for loop that prints to the console 9 through 0.")
// //2. Write a for loop that prints to the console 9 through 0.


// for (var i = 9; i >= 0 ; i--){
//   console.log(i);
// }



// console.log("3. Write a for loop that prints these fruits to the console.")
// //3. Write a for loop that prints these fruits to the console.


// const fruit = ["banana", "orange", "apple", "kiwi"];
// for (var i=0; i<fruit.length; i++){
// console.log(fruit[i]);
// }




console.log("<--------------------------->")
console.log("//# **Bronze Medal**")
//# **Bronze Medal**

console.log("1. Write a for loop that will push the numbers 0 through 9 to an array.")
//1. Write a for loop that will push the numbers 0 through 9 to an array.


// const numbers = [];
// for(let i = 0;i <= 9;i++){
//     numbers.push(i)
// }
// console.log(numbers)

// console.log("//2. Write a for loop that prints to the console only even numbers 0 through 100.")
// //2. Write a for loop that prints to the console only even numbers 0 through 100.

// for (var i = 0; i <= 100; i++){
//   console.log(i);
// }



console.log("//3. Write a for loop that will push every other fruit to an array.")
//3. Write a for loop that will push every other fruit to an array.


const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
let newFruit = [];
for(var i = 0; i <fruit2.length; i++){
  if( i % 2 !== 0){
    newFruit.push(fruit2[i])
  }
console.log(newFruit)
}



// const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// let newFruit = [];

// for(let i = 0;i <= fruit2.length;i++){
//   if(i % 2 !== 0){
//   newFruit.push(i)
// }
// console.log(fruit2)
// }


// const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// function everyOtherFruit(arrFruit2){
//   var temporaryArray = []
//   for (var i = 1; i < arrFruit2.length; i += 2){
//     temporaryArray.push(arrFruit2[i])

//   }
//   return temporaryArray.join(",")
// }
// console.log(everyOtherFruit(fruit2))


console.log("<--------------------------->")
console.log("//# **Silver Medal**")


//Silver Medal

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

console.log("1. Write a loop that will print out all the names of the people of the people array. \n")
//1. Write a loop that will print out all the names of the people of the people array

for(let i = 0; i < peopleArray.length; i++){
  console.log(peopleArray[i].name)
  
}


console.log("\n 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.")
//2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
for(let i = 0; i < peopleArray.length; i++){
  console.log("\n name: " + peopleArray[i].name)
  console.log("  Occupartion: " + peopleArray[i].occupation + "\n")
}



//3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

//Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.




