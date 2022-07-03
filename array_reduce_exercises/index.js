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

//2) Turn an array of numbers into a long string of all those numbers.
console.log("2) Turn an array of numbers into a long string of all those numbers.")

function stringConcat(arr2) {
    // your code here
    // const stringConcat = arr2.reduce((a,b) => a + b, '');
    // return stringConcat
    
    return arr2.reduce(function(final, num2){
    
        return  final +""+ num2;
    })

}
 
 console.log(stringConcat([1,2,3])); // "123"
