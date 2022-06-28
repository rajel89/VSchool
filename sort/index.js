
// <<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>

// <-  https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sort-an-array-alphabetically-using-the-sort-method/18303

function letters(array) {
  // Only change code below this line
return array.sort(function(a,b){
  return a === b ? 0 : a < b ? -1 : 1;
});
  // Only change code above this line
}
console.log(letters(["a", "d", "c", "a", "z", "g"]));



// <<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>
  // .sort() //
  console.log("lowest to largest")
  const arr1 = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

  arr1.sort(function(a, b){
    return a - b
  })

  console.log(arr1)

// <<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>
  // .sort() ES6//

  console.log("largest to lowest")
  const arr2 = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]
  arr2.sort((a, b) => b - a)

  console.log(arr2)

  // <<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>


  function reverseAlpha(arr3) {
    return arr3.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;

    });
   
  }
  console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
  



