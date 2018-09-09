var express = require('express')
var http = require('http')
var path = require('path')
var bodyParser = require('body-parser')
var logger = require('morgan')
var watch = require('node-watch')
var build = require('./build');
 
var app = express()
 
var buildDir = path.join(__dirname, 'build')
 
app.set('port', process.env.PORT || 3000)
app.use(logger('dev'))
app.use(bodyParser.json()) 

app.use(express.static('build'));
 
app.get('/login', function (req, res) {
  res.sendFile(path.join(buildDir, 'OLoginPage/ologinpage.html'))
})

app.get('/', function (req, res) {
  res.sendFile(path.join(buildDir, 'OHomePage/ohomepage.html'))
})
 
var server = http.createServer(app)

server.listen(app.get('port'), function () {
  console.log('Web server listening on port ' + app.get('port'))
})

watch(__dirname + "/public", { recursive: true }, function(evt, src) {
  console.log('src: ', src);
  var dist = src.replace('public', 'build');
  build.build(src, dist);
});
