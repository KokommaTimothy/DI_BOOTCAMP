// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.

function playTheGame() {
    const wantsToPlay = confirm("Would you like to play the game?");
    
    if (!wantsToPlay) {
      alert("No problem, Goodbye.");
      return;
    }
    
    const userNumberString = prompt("Enter a number between 0 and 10:");
    const userNumber = parseInt(userNumberString);
    
    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye.");
      return;
    }
    
    if (userNumber < 0 || userNumber > 10) {
      alert("Sorry it’s not a good number, Goodbye.");
      return;
    }
    
    const computerNumber = Math.round(Math.random() * 10);
    
    console.log("User's number:", userNumber);
    console.log("Computer's number:", computerNumber);
  } 

  

//  Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

//   The point of this function is to check if the userNumber is the same as the computerNumber:
//   If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

//   If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

//   If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

//   If the user guessed more than 3 times, alert “out of chances” and exit the function.

function playTheGame() {
    const wantsToPlay = confirm("Would you like to play the game?");
    
    if (!wantsToPlay) {
      alert("No problem, Goodbye.");
      return;
    }
    
    const userNumberString = prompt("Enter a number between 0 and 10:");
    const userNumber = parseInt(userNumberString);
    
    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye.");
      return;
    }
    
    if (userNumber < 0 || userNumber > 10) {
      alert("Sorry it’s not a good number, Goodbye.");
      return;
    }
    
    let numberOfGuesses = 1;
    
    while (numberOfGuesses <= 3) {
      const computerNumber = Math.round(Math.random() * 10);
      
      const result = compareNumbers(userNumber, computerNumber);
      
      if (result === "WINNER") {
        alert("WINNER!");
        return;
      } else if (result === "BIGGER") {
        userNumber = prompt("Your number is bigger than the computer's, guess again:");
      } else if (result === "SMALLER") {
        userNumber = prompt("Your number is smaller than the computer's, guess again:");
      }
      
      numberOfGuesses++;
    }
    
    alert("Out of chances.");
  }
  
  function compareNumbers(userNumber, computerNumber) {
    if (userNumber === computerNumber) {
      return "WINNER";
    } else if (userNumber > computerNumber) {
      return "BIGGER";
    } else {
      return "SMALLER";
    }
  }