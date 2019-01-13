console.log(module)

module.exports.addNote = () => {
  console.log("addNote")
  return "new Note"
}

module.exports.add = (a,b) => a +b