console.log("Array Reduce Exercises");
//1) Turn an array of numbers into a total of all the numbers

console.log("1) Turn an array of numbers into a total of all the numbers");

function total(arr) {
  // your code here
  return arr.reduce(function (final, num) {
    final += num;
    return final;
  });
}

console.log(total([1, 2, 3])); // 6
