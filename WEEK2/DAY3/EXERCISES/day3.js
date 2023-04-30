
let people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
let rmove = people.shift(1);
console.log(people)

// Write code to replace “James” to “Jason”.
let rplace = (people.splice(2, 1, "Jason"))
console.log(people)

// Write code to add your name to the end of the people array.
let myName = people.push("Blessing")
console.log(people)

// Write code that console.logs Mary’s index.
console.log(people.indexOf("Mary"))

console.log(people)

// Write code to make a copy of the people array using the slice method.The copy should NOT include “Mary” or your name. 
let newPeople = people.slice(1, 3);
console.log(newPeople)

console.log(people)

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("foo"))

// Create a variable called last which value is the last element of the array.
let last = people[people.length-1]
console.log(last)

// Part 2
// Using a loop, iterate through the people array and console.log each person.
people.forEach(ele => console.log(ele))

// Part 2 number 2
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . 
for (let i = 0; i < people.length; i++) {
if (people[i] === "Jason") {
    break;
}
console.log(people[i])
}

// EXERCISE 2
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ["Green", "Pink", "Red", "Black", "Purple"]

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
  }

//   EXERCISE 3
// Prompt the user for a number.
let userInput = prompt("Please enter a number:");
console.log(typeof userInput);

while (userInput < 10) {
    userInput = prompt("Please enter a number greater than or equal to 10:");
  }
  
  console.log("The number entered is: " + userInput);

//   EXERCISE 4
    let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
for (let x in building) {
    console.log(building.numberOfFloors)
}

// console.log how many apartments are on the floors 1 and 3

    console.log("Apartments on floor 1: " + building.numberOfAptByFloor.firstFloor)
    console.log("Apartments on floor 3: " + building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment. 
console.log("The name of the second tenant is: " + building.nameOfTenants[1] + " and he has " + building.numberOfRoomsAndRent.dan[0] + " rooms.")

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
// If it is, than increase Dan’s rent to 1200.

let sarahRent = (building.numberOfRoomsAndRent.sarah[1])
let danRent = (building.numberOfRoomsAndRent.dan[1])
let davidRent = (building.numberOfRoomsAndRent.david[1])
let sarahAndDavid = (sarahRent + davidRent)
console.log(sarahAndDavid)
if (danRent < sarahAndDavid) {
    console.log( building.numberOfRoomsAndRent.dan[1] = 1200)
}

// EXERCISE 5
// Create an object called family with a few key value pairs.
let johnFamily = {
      blessing: ["female", 37],
      enobong: ["female", 35],
      savior: ["male", 31],
      uduak: ["female", 26]
}

// Using a for in loop, console.log the keys of the object.
for (let x in johnFamily) {
    console.log(x)
    // Using a for in loop, console.log the values of the object.
    console.log(johnFamily[x])
}

// EXERCISE 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
//  Given the object above and using a for loop,
//  console.log “my name is Rudolf the raindeer” 

for (let x in details) {
    console.log([x] + " " + details[x])
}

// EXERCISE 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. 
// The society’s name will be the first letter of each of their names sorted in alphabetical order.

let secretSociety = "";
names.sort();
for (let i = 0; i < names.length; i++) {
  secretSociety += names[i].charAt(0);
}
console.log(secretSociety);