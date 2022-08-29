// Why is ageRange not defined?
        
    // the ageRange is not defined because the function "let" is placed in the wrong place of the code. To work, the let function must be call prior ot the if else statement.
// How can we fix this function with var? 
// How can we fix this function avoiding the use of var?
// Why would you use const vs let?
function getAgeRange(person){

    let ageRange //<<<< move the let function from line 12, 15, 18 and calling the it before the if else condition.
    
    if(person.age < 18){
        ageRange = "Child"  
        //let ageRange = "Child"        
    } else if(person.age >= 18 && person.age < 80){
        ageRange = "Adult"
        //let ageRange = "Adult"
    } else {
        ageRange = "Elderly Person"
        //let ageRange = "Elderly Person"
    }

    return ageRange
}
// What would the above function potentially look like if we destructured the person parameter?

const person = { name: "Andrea", age: 27 }
// Why can we add .ageRange to person when we used const to define person?
person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors

//or lines that clutter the console
console.log("The " + person.ageRange + ", " + person.name + ", is " + person.age + " years old.")
// change the above concatented string into a template literal

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// replace this line with one that uses a spread oporator to do the same thing as concat
const fringeMonths = springMonths.concat(fallMonths)

// console.log(springMonths, fallMonths, fringeMonths)