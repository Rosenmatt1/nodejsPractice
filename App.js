console.log("Starting App")

const fs = require('fs')
const os = require('os')
const _ = require("lodash")
const notes = require("./notes.js")

var result = notes.add(1,2)
console.log(result)

console.log(_.isString(true))
console.log(_.isString("Andrew"))

var filteredArray = _.uniq(["Andrew", 1, "Andrew", 1, 2, 3, 4])
console.log(filteredArray)


var user = os.userInfo()

fs.appendFile("greetings.txt", `Hello ${user.username}!  You are ${notes.age}`, function(err) {
  if(err) "unable to write file"
})