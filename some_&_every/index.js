const names =  ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

// .some()

const result = names.some(function(name){
    if(name[0] === "S"){
        return true
    }
})

console.log(result)



// .every()


const result1 = names.every(function(name){
    if(name[0] === "J"){ // <--- will only return true if every object in the array starts with the letter "J". In this case, return is false because "Steve" starts with "S".
        return true
    }
})

console.log(result1)



// ES6 Syntax of .every()
console.log("ES6 Syntax of .every()")

const resultInES6 = names.every(name => name[0] === "J")

console.log(resultInES6)