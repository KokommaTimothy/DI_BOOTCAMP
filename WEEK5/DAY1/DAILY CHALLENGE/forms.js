document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
e.preventDefault()
let formData = new FormData(document.querySelector("form"))
// console.log(formData)

let entries = formData.entries()
let data = Object.fromEntries(entries)
let dataString = JSON.stringify(data)
console.log(dataString)
let p = document.createElement("p")
p.innerText = dataString
document.body.appendChild(p)

}