// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

let color = ["red", "blue", "green", "pink", "yellow", "brown"]
let moons = [3, 1, 5, 2, 4, 2];
let solarSystem = ["Earth", "Mercury", "Neptune", "Jupiter", "Venus", "Uranus"]
let solarSection = document.querySelector(".listPlanets")
for (let i = 0; i < solarSystem.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("planet");
    newDiv.style.backgroundColor = color[i];
    solarSection.appendChild(newDiv)


    for (let x = 1; x <= moons[i]; x++) {
        let new_Div = document.createElement("div");
        new_Div.classList.add("moon");
        new_Div.style.left=x*12+"px";
        newDiv.appendChild(new_Div);

    }
}




