//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Bombando')
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('App rodando na porta 8081!!!')
})