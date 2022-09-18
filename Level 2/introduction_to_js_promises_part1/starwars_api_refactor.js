// << STAR WARS API REFACTOR >>

// This helper function is naturally shorter because it uses the built-in `fetch`
// function, which reduces the amount of code we have to write from scratch.

// Another important thing to note about this function that can be tricky to grasp
// is that it is returning the promise that fetch returns. Because `fetch` uses
// promises, when you call `fetch` it returns a promise immediately. Our function
// simply takes that promise and returns it, but not before chaining a .then()s on
// to parse the actual JSON data first.

// function getData(url) {
//   return fetch(url).then(function (response) {
//     return response.json();
//   });
// }

// Because our helper function returned the promise from fetch, we can use .then() to do stuff
// instead of having to use nested callbacks. We can also chain together the promises to keep
// them from nesting down into a "pyramid of doom."

getData("https://swapi.dev/api/people/1")
    .then(function (lukeData){
        console.log(lukeData.homeworld); //Logs "https://swapi.dev/api/planets/1/"

// We make another call to our function and return the promise forward for
// the next .then() in the chain

return getData(lukeData.homeworld);

})

.then(function(planetData){
    console.log(planetData.name)  //Logs "Tattooine"
})


//To see how amazing this is, 
//let's see the same code without the comments and using arrow functions instead:

function getData(url){
    return fetch(url)
    .then(response => response.json()
    )
}
getData("https://swapi.dev/api/people/1").then(lukeData => {
    console.log(lukeData.homeworld)
    return getData(lukeData.homeworld)
})
.then(planetData => {
    console.log(planetData.name)
})


