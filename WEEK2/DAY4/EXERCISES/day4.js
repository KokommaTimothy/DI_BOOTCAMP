// function lifeIsGood () {
//     return "life is good"
// }
// console.log(lifeIsGood())

// function laugh(n) {
//    str = ""
//    for (let x = 0; x < n; x++) {
//     str += "ha"
//    }
//    return str + "!"

// }

// console.log(laugh(15))

// EXERCISE 1
// function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe() {
console.log("My name is Blessing, im 37 years old, i love to cook and i love travelling and swimming also. im a fashion designer");
}
infoAboutMe()

// Create a function called infoAboutPerson
// (personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person 
// (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoutiteColor) {
    console.log("Your name is " + personName + ", " + "you are " + personAge + " years old, " + " your favourite color is " + personFavoutiteColor )
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow")

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, use prompt to ask John for the amount of the bill. 
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
// Call the calculateTip() function.

function calculatorTip() {
     let bill = prompt("How much is the bill?");
    let tip;
    if (bill < 50) {
        tip = 0.2
        }
    else if (bill >= 50 && bill <=200){
        tip = 0.15
    }
    else if (bill > 200) {
        tip = 0.1
    }
    
    let totalAmount = bill + tip
    console.log(totalAmount)
}
calculatorTip()

// EXERCISE 3
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.
function isDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % 23 === 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log("The sum of all numbers divisible by 23 is:", sum);
  }
isDivisible();

//isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
function isDivisible(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % divisor === 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log(`The sum of all numbers divisible by ${divisor} is: ${sum}`);
  }
  isDivisible(3);
  isDivisible(45)

//   EXERCISE4
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
//  It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters. 
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
//  If the item is in stock, decrease the item’s stock by 1

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let totalPrice = 0;
  for (const item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      totalPrice += prices[item];
      stock[item] -= 1;
    }
  }
  return totalPrice;
}
console.log(myBill())

// EXERCISE5
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

function changeEnough(itemPrice, amountOfChange) {
    let totalChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;
    if (totalChange >= itemPrice) {
      return true;
    } else {
      return false;
    }
  }
  console.log(changeEnough(4.25, [25, 20, 5, 0]));

//   EXERCISE6
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel. 

function hotelCost() {
    while (true) {
      let nights = parseInt(prompt("How many nights would you like to stay in the hotel?"));
      if (isNaN(nights)) {
        alert("Please enter a valid number.");
      } else {
        return nights * 140;
      }
    }
  }

  
// Define a function called planeRideCost().

// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
//     “London”: 183$
//     “Paris” : 220$
//     All other destination : 300$ 

function planeRideCost() {
    while (true) {
      let destination = prompt("What is your destination?").trim().toLowerCase();
      if (!/^[a-z]+$/.test(destination)) {
        alert("Please enter a valid destination.");
      } else {
        switch (destination) {
          case "london":
            return 183;
          case "paris":
            return 220;
          default:
            return 300;
        }
      }
    }
  }

//   Define a function called rentalCarCost().
    // It should ask the user for the number of days they would like to rent the car.
    // If the user doesn’t answer or if the answer is not a number, ask again.
    // Calculate the cost to rent the car. The car costs $40 everyday.
    //     If the user rents a car for more than 10 days, they get a 5% discount.
    // The function should return the total price of the car rental.

    function rentalCarCost() {
        while (true) {
          let days = parseInt(prompt("How many days would you like to rent the car?"));
          if (isNaN(days)) {
            alert("Please enter a valid number.");
          } else {
            let dailyCost = 40;
            let totalCost = days * dailyCost;
            if (days >= 10) {
              totalCost *= 0.95;
            }
            return totalCost;
          }
        }
      }

    //   Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
    //   Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
    //   Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
    function totalVacationCost() {
        let hotelCost = hotelCost();
        let planeCost = planeRideCost();
        let carCost = rentalCarCost();
      
        let totalCost = hotelCost + planeCost + carCost;
      
        console.log(`The hotel cost: $${hotelCost}, the plane tickets cost: $${planeCost}, and the car cost: $${carCost}.`);
        console.log(`The total cost of your vacation is $${totalCost}.`);
      
        return totalCost;
      }
      totalVacationCost();