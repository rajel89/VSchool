//1) Sort an array from smallest number to largest

function leastToGreatest(arr1) {
  return arr1.sort(function(a,b){
    return a - b
  })
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]


//2) Sort an array from largest number to smallest
function greatestToLeast(arr2) {
    // your code here
    return arr2.sort(function(a,b){
        return b -a
    })

  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]


  //3) Sort an array from shortest string to longest

  function lengthSort(arr3) {
    // your code here
    return arr3.sort((a,b)=> a.length - b.length);


  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]