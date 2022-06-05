//1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    // your code here

    let numbMultiplier = arr.map(num => num * 2);
    return numbMultiplier;
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

