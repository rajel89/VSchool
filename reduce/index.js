
// 1 - reduce the array of numbers into a sum of all the numbers
console.log("1 - reduce the array of numbers into a sum of all the numbers")
const nums = [1,2,3,4,5,6,7,8,9,10]

const result1 = nums.reduce(function(final,num){
    final += num
    return final
})

console.log(result1)



// 2 - reduce the users to an array of strings of the user's first and last names
console.log("2 - reduce the users to an array of strings of the user's first and last names")
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

const result = users.reduce(function(final,user){
    final.push(user.fName + "" + user.lName)
    return final
}, [])

console.log(result)



