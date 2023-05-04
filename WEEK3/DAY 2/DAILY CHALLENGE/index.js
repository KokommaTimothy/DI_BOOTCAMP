
// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

let clickBtn = document.getElementById("lib-button")
clickBtn.addEventListener("click", RespondClick)

function RespondClick(e){
e.preventDefault()
let noun = document.getElementById("noun").value
let adjective = document.getElementById("adjective").value
let person = document.getElementById("person").value
let  verb = document.getElementById("verb").value
let place = document.getElementById("place").value

if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") return

let story = writeStory(noun, adjective, person, verb, place)
console.log(story)

createStory(story)
}
function writeStory(noun, adjective, person, verb, place){
    return `My sister has a ${noun} shes very  ${adjective} her name is  ${person} , she likes to  ${verb}. They live in  ${place}, such a lovely baby`;
}
function createStory(story){
let paragraph = document.getElementById("story");
let span = document.createElement("span")
span.innerText = story
paragraph.appendChild(span)
}

let shufflebtn = document.getElementById("shuffle")
shufflebtn.addEventListener("click", clickHere)

// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

function clickHere(e){
    e.preventDefault()
    let noun = document.getElementById("noun").value
    let adjective = document.getElementById("adjective").value
    let person = document.getElementById("person").value
    let  verb = document.getElementById("verb").value
    let place = document.getElementById("place").value

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") return

      let story2 = writeStory2(noun, adjective, person, verb, place)
      console.log(writeStory2)
    }


    function writeStory2(noun, adjective, person, verb, place){
      return  `${noun} went to ${adjective} and saw a ${person} ${verb}. They quickly ${place} and went home.`
              
    }
    
      const randomIndex = Math.floor(Math.random() * writeStory2.length);
      span.innerText = writeStory2[randomIndex];

    //   i dont know what else to do for the bonus question. ive tried all i could. and getting frustrated. its still not correct



    





