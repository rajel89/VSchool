// resolve = .then
// reject = .catch

// thenable = is known to a function that returns a promise.

// <<<<>>>> this code example is not an asynchronous function because it is simply waiting. <<<<>>>>

console.log(
  "<<<<>>>> this code example is not an asynchronous function because it is simply waiting. <<<<>>>>"
);

function flipCoin() {
  return new Promise((resolve, reject) => {
    // << A promise has two methods, resolve or reject
    const randomNUm = Math.floor(Math.random() * 2);

    if (randomNUm === 0) {
      resolve("HEADS");
    } else if (randomNUm === 1) {
      reject("TAILS");
    }
  });
}

flipCoin()
  .then((response) => console.log("RESOLVED: " + response)) // << the .then() receives whatever was resolved
  .catch((error) => console.log("REJECTED: " + error)); // << the .catch() is the value if the function rejects

// the promise constructor has few methods i.e. example below. The function above "flipCoin()" dose not have to be use if all that's needed is
// to use each of the method: "resolve" and "reject" to capture the value.

Promise.resolve("Something").then((response) => console.log(response));
Promise.reject("Tails").catch((error) => console.log(error));

// <<<<>>>> This is an exmpla an Asynchronous function. <<<<>>>>

console.log("<<<<>>>> This is an exmpla an Asynchronous function. <<<<>>>");

//EXAMPLE 1: 
function getData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000); // << 2000 is in millisecond or equals to 2 seconds
  });
}
getData()
  .then((res) => console.log("RESOLVED")) // << RESOLVED will be console.log after 2 seconds because the setTimeout is stated to trigger the .then after 2 seconds.
  .catch((err) => console.log(err));


//EXAMPLE 2: 
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("HELLO WORLD"), 4000); // << 3000 is in millisecond or equals to 2 seconds
  });
}
getData()
  .then((res) => console.log(res)) // << HELLO WORLD will be console.log after 3 seconds because the setTimeout is stated to trigger the .then after 3 seconds.
  .catch((err) => console.log(err));
