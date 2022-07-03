//You should use multiple array methods to solve these problems. Don't use `for` loops!

//Using the provided `peopleArray` (bottom of this article), write a function that:

//1. Returns a list of everyone older than 18, which is
//2. sorted alphabetically by last name, and where
//3. each name and age is embedded in a string that looks like an HTML `<li>` element.

var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 18,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  // {
  //   firstName: "Kyle",
  //   lastName: "Mooney",
  //   age: 27,
  // },
  // {
  //   firstName: "Pasha",
  //   lastName: "Datsyuk",
  //   age: 13,
  // },
  // {
  //   firstName: "Lev",
  //   lastName: "Tolstoy",
  //   age: 82,
  // },
];

const overEighteen = peopleArray
  .filter((people) => people.age >= 18)

  .sort(function (a, b) {
    return a.lastName === b.lastName ? 0 : a.lastName < b.lastName ? -1 : 1;
  });

console.log(overEighteen);
