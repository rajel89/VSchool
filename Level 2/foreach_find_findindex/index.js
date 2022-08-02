const arr = [1, 2, 3, 4, 5, 6, 7, 8 ]


const users = [
    {name: "joe"},
    {name: "julie"},
    {name: "rick"}
]


// .forEach

//<--- es56 Syntax --->

const newArr = []
arr.forEach(num => num % 2 === 0 && newArr.push(num))

console.log(newArr)

// <--- es5 syntax --->


// const newArr = []

// arr.forEach(function(num){
//     if(num % 2 === 0 ){
//         newArr.push(arr)
//     }
// })

// console.log(newArr)



// .find() 


const result1 = users.find(function (user){
    if(user.name[0] === "j"){ // <--- user.name[0] means to look for the name with the first string "j", in this case it will return "joe" and will look no further."
    return user
}
})

console.log(result1)


const result2 = users.find(function(user){
    if(user.name === "julie"){ // <--- user.name ===, instructs the syntax to look for a specific name in the object array of users."
        return user
    }
})

console.log(result2)



// .findIndex() 
// <--- findIndex will return the index value of a object in the array instead of the object itself.

const userIndex = users.findIndex(function(user){
    if(user.name === "julie"){
        return true
    }
})

console.log(userIndex)




