
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