var express = require('express');
var url = require('url');
var final = [];
var app = express();

app.get('/', function (req, res) {
  console.log("Some conection happened");

   console.log(req);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
