
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


// 3 - reduce the array into a count of how many people voted
console.log("3 - reduce the array into a count of how many people voted")

const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const voteCount = voters.reduce(function(final,voters){
    if(voters.voted){
        final++
    }
    return final
},0)

console.log(voteCount)



const didntVoteCount = voters.reduce(function(final, voters){
    if(!voters.voted){ // <--- the "!"  means the take the vote = false or to return the number of people who did not vote.
        final++
    }
    return final
},0)

console.log(didntVoteCount)
