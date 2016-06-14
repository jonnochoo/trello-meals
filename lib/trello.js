const Trello = require('node-trello')
const config = require('./../config')

const t = new Trello(config.trello.key, config.trello.token)

module.exports = {
  getCards,
  getBoards
}

function getCards (boardId, callback) {
  t.get(`/1/boards/${boardId}`, { cards: 'open' }, callback)
}

function getBoards (callback) {
  t.get(`/1/members/me/boards`, callback)
}