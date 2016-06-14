var trello = require('./../lib/trello')

trello.getBoards((err, results) => {
  if(err) return console.log(err)
  
  results.forEach(board => {
    console.log(board.name, board.id)    
  })
})