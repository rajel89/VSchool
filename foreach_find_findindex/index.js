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




