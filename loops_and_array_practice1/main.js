var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2];
var petsArr = ["cat", "dog", "bird", "snake", "rabbit"];
var users = [
  {
    name: "joe",
    age: 30,
  },
  {
    name: "steve",
    age: 23,
  },
  {
    name: "sarah",
    age: 39,
  },
  {
    name: "lisa",
    age: 27,
  },
];
//QUIZ

// 1. What part of the for loop will allow you to access each individual item in an array?

// for(var i = 0;)
// numbersArr[0]
    
// 2. What part of the for loop will need the array's length in order to run the correct amount of iterations?

// for(var i =  0; i < array.length);

// 3. Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits )
    
for (var i = 0; i < petsArr.length; i++) {
  console.log(petsArr[i] + "s");
}


// 4. Using the numbers array, how would you write a for loop to console log only the odd numbers?

var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2];

for (var i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] % 3 === 0) {
    console.log(numbersArr[i]);
  }
}

    
// 5. Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")

var users = [
    {
      name: "joe",
      age: 30,
    },
    {
      name: "steve",
      age: 23,
    },
    {
      name: "sarah",
      age: 39,
    },
    {
      name: "lisa",
      age: 27,
    },
  ];
  
    
    for (var i = 0; i < users.length; i++) {
        console.log("Hi, I am " + users[i] + " I am " + users[i].age + " year old");
  }
  


// 6. Using the pets array, how would you write a for loop that would console.log all the pets in reverse order?

var petsArr = ["cat", "dog", "bird", "snake", "rabbit"];

for (var i = petsArr.length - 1; i >= 0; i--) {
  console.log(petsArr[i]);
}

var eventsAtWork = [
  "work",
  "pretend to work",
  "party",
  "work",
  "meeting",
  "party",
  "daily grind",
  "work",
  "party",
];

for (var i = 0; i < eventsAtWork.length; i++) {
  console.log(eventsAtWork[i] === "party");
}



// 1. Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler","monitor","computer","desk","lamp","computer","lamp","stapler","computer","computer",];
let count = 0;
for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    count++;
  }
}
console.log(count);

// 2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];


for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age<=18)
    console.log("Hi, I am " + peopleWhoWantToSeeMadMaxFuryRoad[i] + " I am " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " year old");
}