//Synchronous code examples

//Eample 1
var firstName = "joe";

//Example 2

function addExcitementToString(str) {
  return str + "!!1!";
}

console.log(addExcitementToString("H1"));

//Example 4 (recursive function)

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

//Asynchronous code examples

//Example 1
setTimeout(function () {
  console.log("Inside the setTimeout");
}, 500);

console.log("Outside the setTimeout");

//Excample 2

// document.getElementById("thing").addEventListener("click", function () {
//   // Only run WHEN the element is clicked
//   console.log("Clicked!");
// });


//Example 3 (using a promise)

// fetch("http://some.url")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.data); // Runs SECOND
//   });

// console.log("Outside the fetch's GET request"); // Runs FIRST



//setTimeout uses callbacks

setTimeout(function(){
    console.log("Inside the setTimeout")
},500)
console.log("Outside the setTimeout")


//addEventListener uses callbacks

// Helper function that will get data from a given URL parameter
// and passes the data to a callback function so the programmer
// can do whatever they want with that data


function getData(url, callback){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            const jsonData = xhr.responseText
            const data = JSON.parse(jsonData)
            return callback(data)
        }
    }
    xhr.open ("GET", url, true)
    xhr.send()
    
}

// // Use our helper function to get the Luke Skywalker resource from the API
// // Notice we need to nest a second `getData` inside the first one's callback function
// // because we didn't get all the data we needed from just the first URL call alone

getData("https://swapi.dev/api/people/1/", function(lukeData){
    console.log(lukeData.homeworld) // <<=== logs "https://swapi.co/api/planets/1" instead of "Tatooine"

    // Here we need to make the second call to the homeworld URL so we can get its name

    getData(lukeData.homeworld, function(planetData){
        lukeData.homeworld = planetData.name //<<=== replace the URL with the actual name in the lukeData object
        console.log(lukeData.homeworld) //<<===now logs "Tatooine"! 

        //Now while we're inside this double-nested function we can do stuff with the data we got.
    })

})

// PROMISE CHAINING

//Promise chaining is the ability to perform asynchronous operations in an order as if they were synchronous. 
//Did you notice in the above example that there are actually 2 '.then()' blocks? They are chained together in a promise chain.

//Here's the key to understanding promise chaining: whatever you return from one .then() block is what will be put into
//the next .then() block's callback function parameter. (It's okay if you have to read that a couple times for it to sink in.) 
//Above, this wasn't quite as apparent because the example uses arrow functions, so let's take a look at the same code refactored 
//using function declarations:

// fetch("https://some.url")
//     .then(function(responseFromFetch) => {

//         // By returning this value, it gets passed
//         // to the next .then() which calls it
//         // "responseAfterJsonParse"
//         return responseFromFetch.json())

//     .then(function(responseAfterJsonParse) => {
//         console.log(responseAfterJsonParse.data)
//     })



//Or here's an even more contrived example that may drive the point home:


// fetch("https://some.url")
// .then(function(resFromUrl){
//     console.log("First. then block")
//     return "Hi there!" //Return an abritraty string fro demosntration purposes
// })
// .then(function(valueFrom1stThenBlock){
//     console.log(valueFrom1stThenBlock) //Logs "Hi there!"
//     return "Goodbye."
// })
// .then(function(valueFrom2ndThenBlock){
//     console.log(valueFrom2ndThenBlock) //Logs "Goodbye."
// })







