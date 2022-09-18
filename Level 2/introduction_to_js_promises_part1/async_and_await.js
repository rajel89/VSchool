// <<<<>>>> async/await <<<<>>>>

//Just like promises are syntactic sugar around callbacks, async/await is syntactic sugar around promises! Which
//means... async/await is really sweet

//Async functions make use of an earlier-released JavaScript feature called generator functions. We won't go into the details of
//generators in this article, but it's enough to know that Async functions are just a little different than the functions you're used
//to.

// <<<<>>>> async keyword <<<<>>>>

//The first difference in an async function is that is uses the async keyword right before the regular function definition. All of the
//below are async functions because of the use of the async keyword:

async function myFunc1() {
  //async function declaration
}

const myFunc2 = async function () {
  //async function expression
};

const myFunc3 = async () => {
  // async arrow function expression
};

//Adding the async keyword before a function does 2 major things to the function:

// // 1. It enables your ability to use the await keyword inside the function. The await keyword in JavaScript can only be used
// //    inside an async function.

// // 2. When your async function is called, it automatically returns a pending promise. When your function returns a value, it
// //    resolves the promise with that value. If your function throws an error, it rejects the promise with the thrown error.

// // First let's talk about the await keyword

// <<<<>>>> await keyword <<<<>>>>

//This keyword is a way to make normally asynchronous operations synchronous. In other words, anytime there's a function that
//normally would return a promise, it allows you to treat that function as if it were a synchronous function, and it pauses the
//execution of the remainder of your async function until that asynchronous function call completes.

//This way, we can actually set variables to the values of asynchronous functions inline instead of having to use the
//promise's .then and a callback function.

// <<<<>>>> Star Wars API example refactor <<<<>>>>
//Let's modernize our Star Wars function! Again, read the comments carefully:

// Change up this function because it's so simplified due to async/await that we
// don't necessarily need to create a helper function at all!

async function getData() {
  // Every time you see the 'awat' keyword, the function will pause and wait
  // for the next asynchronous call (like fetch) to finish before moving on

  const lukeResponse = await fetch("https://swapi.dev/api/people/1");
  const lukeData = await lukeResponse.json();
  console.log(lukeData.homeworld); // Logs "https://swapi.dev/api/planet/1"

  const planetResponse = await fetch(lukeData.homeworld);
  const planetData = await planetResponse.json();
  console.log(planetData.name); // Logs "Tatooine"!

  // Reset the lukeData.homeworld to be the planet name instead of just the URL

  lukeData.homworld = planetData.name;

  // Resolve the automatically-created promise with the lukeData we've built

  return lukeData;
}

// async function automatically return promises and resolve with whatever
// got returned from that function .So eventually we'll need to use a .then()

getData().then((lukeData) => console.log(lukeData));

