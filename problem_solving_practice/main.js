
//Write a function that takes an array of numbers and returns the largest (without using Math.max())

//Solution 1
console.log("<-- solution 1 -->")

function  largest(array){
  let maxVal = array[0]; 

  for (let i = 1; i < array.length; i++){
    if (array[i] > maxVal) maxVal = array[i];
  }
  return maxVal;
}
console.log(largest([3, 5, 2, 8, 1]));

//Solution 2
console.log("<-- solution 2 -->")

function largest(arr){
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] > maximum) {
      maximum = arr[i]
    }
  }
  return maximum;
}


console.log(largest([3, 5, 2, 8, 1]));

console.log("Write a function that takes an array of words and a character and returns each word that has that character present.")

//Write a function that takes an array of words and a character and returns each word that has that character present.

//lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 

// => ["C%4!", "Hey!"]




console.log("Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.")

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

// function isDivisible(x,y)
// {
//   return ((x % 2 == 0))
// }
