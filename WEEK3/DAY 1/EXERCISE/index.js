// Using Javascript:

//     Retrieve the div and console.log it
//     Change the name “Pete” to “Richard”.
//     Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
//     Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Retrieve the div and console.log it
let divContainer = document.getElementById("container");
console.log(divContainer);

// Change the name “Pete” to “Richard”
document.getElementsByTagName("li")[1].innerHTML = "Richard";

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
let list = document.querySelectorAll(".list")
list[1].children[1].remove()

// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
// document.querySelectorAll(".list")[0].firstElementChild.textContent = "Blessing"
// document.querySelectorAll(".list")[1].firstElementChild.textContent = "Blessing"
list.forEach(list => list.firstElementChild.textContent = "Gloria")


// Add a class called student_list to both of the <ul>'s.
list.forEach(list => list.classList.add("student_list"))

// Add the classes university and attendance to the first <ul>.
list[0].classList.add("university", "attendance")

// EXERCISE2
// Add a “light blue” background color and some padding to the <div>.
 let color = document.getElementsByTagName("div")   
     document.getElementsByTagName("div")[1].style.backgroundColor = "lightblue";
     document.getElementsByTagName("div")[1].style.padding = "50px 10px 20px 30px";

    // Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)  
    let hideUser = document.querySelectorAll("ul")
    hideUser[2].children[0].style.visibility = "hidden"

    // Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
    hideUser[2].children[1].style.borderStyle = "solid"

    // Change the font size of the whole body.
   let body = document.getElementsByTagName('body')[0];
   body.style.fontSize = "x-large"

    // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let divBackground = document.getElementsByTagName("div")[1].style.backgroundColor
  let user = document.querySelectorAll("ul")
if (divBackground === "lightblue") {
    console.log("This is Light blue")
    console.log("Hello " + user[2].children[0].textContent + " and " + user[2].children[1].textContent)
  }
   
//   EXERCISE 3
// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let newDiv = document.getElementById("navBar")
newDiv.setAttribute("id", "socialNetworkNavigation")

// We are going to add a new <li> to the <ul>
// First, create a new <li> tag (use the createElement method)
let newElement = document.createElement("li")
console.log("li: ", newElement)
// Create a new text node with “Logout” as its specified text
let newContent = document.createTextNode("Logout")
newElement.appendChild(newContent)
console.log(newElement)

let ul = newDiv.firstElementChild
ul.appendChild(newElement)

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). .
firstElement = ul.firstElementChild
lastElement = ul.lastElementChild

// Display the text of each link. (Hint: use the textContent property)
firstElement.textContent;
console.log("First li content is " + firstElement.textContent)
lastElement.textContent
console.log("Second li content is " + lastElement.textContent)

// EXERCISE 4
// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty div:
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
    let allBooks = [
        {
            title: "The Spanish love deception",
            author: "Elena Armas",
            image: "https://nypost.com/wp-content/uploads/sites/2/2021/07/The-Spanish-Love-Deception.jpg?quality=90&strip=all&w=10241",
            alreadyRead: false
        },

        {
            title: "saving valentine",
            author: "K.L.Ramsey",
            image: "https://miblart.com/wp-content/uploads/2021/02/image2.png",
            alreadyRead: true 
        }
    ];

    // Initiate the array with 2 books of your choice 
    // (ie. Add manually 2 books objects in the array)
    // Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
    // For each book :
    // You have to display the book’s title and the book’s author.
    // Example: HarryPotter written by JKRolling.
    // The width of the image has to be set to 100px.
    // If the book is already read. Set the color of the book’s details to red.
    
    
    
    let tbl = document.createElement("table");
    let tblHead = document.createElement("tr")
    let tblTitle = document.createElement("th")
    tblTitle.textContent = ("Title")
    let tblAuthor = document.createElement("th")
    tblAuthor.textContent = ("Author")
    let tblImage = document.createElement("th")
    tblImage.textContent = ("Image")
    tblHead.appendChild(tblTitle);
    tblHead.appendChild(tblAuthor);
    tblHead.appendChild(tblImage);
    tbl.appendChild(tblHead)
    console.log(tbl)
for (let i = 0; i < allBooks.length; i++) {
    let books = allBooks[i]
    let row = document.createElement("tr")

    let cell1 = document.createElement("td")
    cell1.textContent = books.title
    row.appendChild(cell1)

    let cell2 = document.createElement("td")
    cell2.textContent = books.author
    row.appendChild(cell2)

    let cell3 = document.createElement("td")
    let cellimg = document.createElement("img")
    cellimg.src = books.image
    cellimg.width = 100
    cell3.appendChild(cellimg)
    row.appendChild(cell3)

    if (books.alreadyRead) {
        cell1.style.color = "red"
        cell2.style.color = "red"
    }

    tbl.appendChild(row)
}
    

    let bookList = document.querySelectorAll("div")
    bookList[3].appendChild(tbl)
    console.log(bookList)
    tbl.setAttribute("border", "2")
