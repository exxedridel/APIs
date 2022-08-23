document.getElementById("btn-new-deck").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => console.log(data));
});

// function callback() {
//     console.log("I finally ran!")
// }
// setTimeout(callback, 2000)

/**
 * Challenge: .filter()
 * Part 1: Given the array of objects below, create a new array with the `.filter()` array method that contains only the objects where "hasPet" is true
 * Part 2: Move the anonymous in-line function to its own, named function
 */
const people = [
  { name: "Jack", hasPet: true, age: 12 },
  { name: "Jill", hasPet: false, age: 18 },
  { name: "Alice", hasPet: true, age: 22 },
  { name: "Bob", hasPet: false, age: 32 },
];

// function gimmeThePets(loQueSea) {
//   return loQueSea.hasPet; // condition that want to filter (can be ex. loQueSea.age >= 18)
// }

// const peopleWithPets = people.filter(gimmeThePets);
// console.log(peopleWithPets);

// https://www.javascripttutorial.net/javascript-array-filter

/**
 * Challenge: Use your own made filter array method!
 * Given the above `people` array, return a new array with only people that have the age of majority
 * Note: Remember that your callback function will be given the individual item in the array for a parameter
 */

 function filterArray(array, callback) {
   const resultingArray = []
   // Filtering logic here
   for (let item of array) {
       const shouldBeIncluded = callback(item)
       if (shouldBeIncluded) {
           resultingArray.push(item)
       }
   }
   return resultingArray
}

const peopleWithMajority = filterArray(people, function(person) {
   return person.age >= 18
})
console.log(peopleWithMajority)
