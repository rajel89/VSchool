//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  // your code here

  let numbMultiplier = arr.map((num) => num * 2);
  return numbMultiplier;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2) Take an array of numbers and make them strings
function stringItUp(arr) {
  //your code here
  let strArr = arr.map(String);
  return strArr;
}
console.log(stringItUp([2, 5, 100])); //["2", "5", "100"]

//3) Capitalize the first letter of each name and make the rest of the characters lowercase
function capitalizeNames(arr) {
  //your code here

  let firstLetterCap = arr.map(function (string) {
    return string.substr(0, 1).toUpperCase() + string.substr(1).toLowerCase();
  });

  return firstLetterCap;
}

console.log(capitalizeNames(["john", "Jacob", "jinGleHeimer", "schmidt"]));
//output;
//["John", "Jacob", "Jingleheimer", "Schmidt"]



//4) Make an array of strings of the names
function namesOnly(arr) {
  //your code here

  let onlyNameArr = arr.map((n) => n.name);
  return onlyNameArr;
}
console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

//["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


//5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeString(arr){
    //your code here

    let reFormArr = arr.map(arr =>{
        if(arr.age>=18){
            console.log(arr.name + " can go to The Matrix")
        }
        else{
            console.log(arr.name + " is under age!!");
        }
    })

}

console.log(makeString([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


//6) Make an array of the names in h1s, and the ages in h2s


function readyToputIntheDOM(arr){
    //your code here
    let hTageArr = arr.map(arr => {
        console.log("<h1>"+arr.name+"</h1>"+"<h2>"+arr.age+"</h2>")
    })

}
console.log(readyToputIntheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 5
    },
    {
        name: "Bob Ziroll",
        age: 100
    }

]));

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
