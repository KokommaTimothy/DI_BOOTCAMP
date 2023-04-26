// EXERCISE 4 DAY 2
               // 0          1             2                3
let users = ["Gloria", "Bash", "Ifiok", "Mfon", "Blessing"];;
console.log(users.length)
if (users.length === 0) {
    console.log("no one is online")
}
else if (users.length === 1) {
    console.log(users[0]  + " is online" )
}

else if (users.length === 2) {
    console.log(users[0] + " and " + users[1] + " are online")
}
else if (users.length > 2) {
    console.log(users[0] + " and " + users[1] + " and " + (users.length-2 )+ " more are online")
}





