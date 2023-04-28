let bottles = parseInt(prompt("Enter the number of bottles to begin counting down:"));

while (bottles > 0) {
  console.log(bottles + " bottle" + (bottles > 1 ? "s" : "") + " of beer on the wall");
  console.log(bottles + " bottle" + (bottles > 1 ? "s" : "") + " of beer,");
  console.log("Take " + (bottles > 1 ? "one" : "it") + " down, pass it around,");
  bottles += 1;
  console.log((bottles === 1 ? "No more" : bottles - 1) + " bottle" + (bottles - 1 > 1 ? "s" : "") + " of beer on the wall.");
  console.log("");
  bottles -= 1;
}

console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, " + parseInt(prompt("Enter the number of bottles to start counting down:")) + " bottles of beer on the wall.");
