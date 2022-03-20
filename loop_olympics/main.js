
console.log("<--------------------------->")
console.log("//# **Preliminaries**")
//# **Preliminaries**
//1. Write a for loop that prints to the console the numbers 0 through 9.
console.log("1. Write a for loop that prints to the console the numbers 0 through 9.")

for (var i = 0; i <= 9; i++){
    console.log(i);
}


console.log("2. Write a for loop that prints to the console 9 through 0.")
//2. Write a for loop that prints to the console 9 through 0.


for (var i = 9; i >= 0 ; i--){
  console.log(i);
}



console.log("3. Write a for loop that prints these fruits to the console.")
//3. Write a for loop that prints these fruits to the console.


const fruit = ["banana", "orange", "apple", "kiwi"];
for (var i=0; i<fruit.length; i++){
console.log(fruit[i]);
}




console.log("<--------------------------->")
console.log("//# **Bronze Medal**")
//# **Bronze Medal**

console.log("1. Write a for loop that will push the numbers 0 through 9 to an array.")
//1. Write a for loop that will push the numbers 0 through 9 to an array.





console.log("//2. Write a for loop that prints to the console only even numbers 0 through 100.")
//2. Write a for loop that prints to the console only even numbers 0 through 100.

// for (var i = 0; i <= 100; i++){
//   console.log(i);
// }



console.log("//3. Write a for loop that will push every other fruit to an array.")
//3. Write a for loop that will push every other fruit to an array.

const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
function everyOtherFruit(arrFruit2){
  var temporaryArray = []
  for (var i = 1; i < arrFruit2.length; i += 2){
    temporaryArray.push(arrFruit2[i])

  }
  return temporaryArray.join(",")
}
console.log(everyOtherFruit(fruit2))



