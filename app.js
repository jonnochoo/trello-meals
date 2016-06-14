var express = require('express')
var path = require('path')
var routes = require('./routes')
var port = 3000
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.dev')

var app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Webpack (dev only)
var compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes)
app.use(function(req, res){
  res.status(404).render('404')
})

app.listen(port, function(){
  console.log('Express server listening on port ' + port)
})