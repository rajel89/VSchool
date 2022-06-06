//1) Given an array of numbers, return a new array that has only the 
//numbers that are 5 or greater.

function fiveAndGreaterOnly(arr){
    //your code here

    let newNumber = arr.filter (fiveAndGreaterOnly => fiveAndGreaterOnly >= 5)
    return newNumber
}
//test
console.log(fiveAndGreaterOnly([3,6,8,2])); ///[6,8]

//2) Given an array of numbers, return a new array that only 
//includes the even numbers.

function evensOnly(arr){
    //your code here
    let evenNumber = arr.filter(evensOnly => evensOnly % 2 === 0)
    return evenNumber
}
//test
console.log(evensOnly([3,6,8,2])); ///[6,8,2]


//3) Given an array of strings, return a new array that only 
//includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr){
    //your code here
    let fiveOrFewer = [];
    arr.filter(x=> {
        if(x.length<=5){
            fiveOrFewer.push(x);
        }
    })
    console.log(fiveOrFewer)
}
//test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))//["big","dog", "wolf","eaten"]

//4) Given an array of people objects, return a new array that has 
//filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
    //your code here
    arr.filter(arr =>{
        if(arr.member === true){
            console.log(arr);
        }
    })

}
//test
console.log(peopleWhoBelongToTheIlluminati([
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kayne West", member: false},
    {name: "Bob Ziroll", member: true}
]));
//=>
//[{ name: "Angelina Jolie", member: true},
// { name: "Paris Hilton", member: true},
// { name: "Bob Ziroll", member: true}]