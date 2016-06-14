var config = require('./../config')
var key = config.trello.key
var open = require('open')

var url = `https://trello.com/1/connect?key=${key}&name=Trello%20Meals&response_type=token&expiration=never`
open(url)