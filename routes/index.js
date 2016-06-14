var express = require('express')
var router = express.Router()
var trello = require('./../lib/trello')
var _ = require('lodash')

router.get('/', function(req, res) {
  return res.render('index')
})

router.get('/api', function(req, res) {
  var cards = trello.getCards('545df884b72430fcc48bf351', function (err, results) {
    if(err) return console.log(err)
    var cards = results.cards.map(card => {
      return { 
          id: card.id,
          name: card.name,
          shortUrl: card.shortUrl,
          labels: card.labels.map(label => { return label.name })  
        }
    })
    return res.json(cards);  
  })
  
})

module.exports = router