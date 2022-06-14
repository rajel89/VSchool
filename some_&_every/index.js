const names =  ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

// .some()

const result = names.some(function(name){
    if(name[0] === "S"){
        return true
    }
})

console.log(result)



// .every()

