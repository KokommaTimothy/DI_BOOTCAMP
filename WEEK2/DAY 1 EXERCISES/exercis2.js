//exercise2 part I number 1 DAY1 EXERCISE
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength)

myWatchedSeries.splice(2, 0, "and");

let myWatchedSeriesSentence = myWatchedSeries.join(" ");
console.log(myWatchedSeriesSentence);

console.log(
    `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
  );

//   Exercise2 part2
myWatchedSeries[3] = "friends"
console.log(myWatchedSeries)

myWatchedSeries.push("avenger")
console.log(myWatchedSeries)

myWatchedSeries.unshift("earlybird")
console.log(myWatchedSeries)

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries)

let thirdLetter = [myWatchedSeries[1]]
console.log(thirdLetter)

console.log(myWatchedSeries)

//   exercise3 
let celsius = 50;
let celsiusInFaranheit = (celsius/5)*9 + 32;
console.log(celsius + '°C is ' + celsiusInFaranheit + '°F');

// exercise4
let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: it will out 55 because 34 and 21 are numbers added together
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: it will output 23 because variable a has been redeclared. and added to b
    // Actual:23

    //c is undefined

    console.log(3 + 4 + '5');
    //prediction is 75 because 4+3 are numbers added together and "5" is a string

    typeof(15)
    console.log(typeof(15))
// Prediction: 15
// Actual: number

typeof(5.5)
console.log(typeof(5.5))
// Prediction: 5.5
// Actual: number

typeof(NaN)
console.log(typeof(NaN))
// Prediction: NaN
// Actual: number

typeof("hello")
console.log(typeof("hello"))
// Prediction:
// Actual: string

typeof(true)
console.log(typeof(true))
// Prediction: true
// Actual: boolean

typeof(1 != 2)
console.log(typeof(1 != 2))
// Prediction: number
// Actual: boolean

"hamburger" + "s"
console.log("hambuger" + "s")
// Prediction: hambugers
// Actual:hambugers

"hamburgers" - "s"
console.log("hambugers" - "s")
// Prediction:
// Actual:NaN

"1" + "3"
console.log("1" + "3")
// Prediction: 13 STRING
// Actual:

"1" - "3"
console.log("1" - "3")
// Prediction: NaN
// Actual: -2

"johnny" + 5
console.log("johhny" + "5")
// Prediction: johhny5
// Actual:johnny5

"johnny" - 5
console.log("johhny" - "5")
// Prediction:NaN
// Actual: NaN

99 * "hello"
console.log(99 * "hello")
// Prediction: NaN
// Actual: NaN

1 != 1
console.log(1 != 1)
// Prediction: false
// Actual: false

1 == "1"
console.log(1 =="1")
// Prediction:false
// Actual: true

1 === "1"
console.log(1 === "1")
// Prediction: false
// Actual: false

5 + "34"
console.log(5 + "34")
// Prediction: 534
// Actual: 534

5 - "4"
console.log(5 - "4")
// Prediction: NaN
// Actual: 1

10 % 5
console.log(10 % 5)
// Prediction: 0
// Actual: 0

5 % 10
console.log(5 % 10)
// Prediction: 5
// Actual: 5

"Java" + "Script"
console.log("Java" + "Script")
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
console.log(" " + " ")
// Prediction: null
// Actual:

" " + 0
console.log(" " + 0)
// Prediction: 0
// Actual: 0

true + true
console.log(true + true)
// Prediction: true
// Actual: 2

true + false
console.log(true + false)
// Prediction:
// Actual: 1

false + true
console.log(false + true)
// Prediction: -1
// Actual: 1

false - true
console.log(false - true)
// Prediction: -1
// Actual: -1

!true
console.log(!true)
// Prediction: true
// Actual: false

3 - 4
console.log(3 - 4)
// Prediction: -1
// Actual: -1

"Bob" - "bill"
console.log("Bob" - "bill")
// Prediction: 
// Actual:NaN






