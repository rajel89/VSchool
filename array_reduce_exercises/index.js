console.log("Array Reduce Exercises");
//1) Turn an array of numbers into a total of all the numbers

console.log("1) Turn an array of numbers into a total of all the numbers");

function total(arr) {
  // your code here
  return arr.reduce(function (final, num) {
    final += num;
    return final;
  });
}

console.log(total([1, 2, 3])); // 6

//2) Turn an array of numbers into a long string of all those numbers.
console.log(
  "2) Turn an array of numbers into a long string of all those numbers."
);

function stringConcat(arr2) {
  // your code here
  // const stringConcat = arr2.reduce((a,b) => a + b, '');
  // return stringConcat

  return arr2.reduce(function (final, num2) {
    return final + "" + num2;
  });
}

console.log(stringConcat([1, 2, 3])); // "123"

//3) Turn an array of voter objects into a count of how many people voted
console.log(
  "3) Turn an array of voter objects into a count of how many people voted"
);

function totalVotes(arr3) {
  // your code here
  return (totalVotes = arr3.reduce(function (final, voters) {
    if (voters.voted) {
      final++;
    }
    return final;
  }, 0));
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
console.log("4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once")

function shoppingSpree(arr4) {
  // your code here
    const totalPrice = wishlist.map(prices => Number(prices.price))
    .reduce((sumOfPrices, pricing) => sumOfPrices + pricing)
    return totalPrice

}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005