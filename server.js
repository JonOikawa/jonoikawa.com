var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
app.engine('handlebars',
  exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello', function (req, res) {
  res.send('Hello Wssald!');
});

app.get('/handlebars', function(req, res) {
  res.render('index', {
    test: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js'
  });
});

app.get('/test', function(req, res) {
  res.render('./scss/test');
});

app.use('/public', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
