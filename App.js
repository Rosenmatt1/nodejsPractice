console.log("Starting App")

const fs = require('fs')
const os = require('os')
const notes = require("./notes.js")

var result = notes.add(1,2)
console.log(result)


// var user = os.userInfo()

// fs.appendFile("greetings.txt", `Hello ${user.username}!  You are ${notes.age}`, function(err) {
//   if(err) "unable to write file"
// })