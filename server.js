var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./src/app/router/Books'); // роутер для передачи rest api
var music = require('./src/app/router/Musics'); // music
var app = express();
var mongoose = require('mongoose');

/**
 *  mongouse - подключаем библиотеку для связи с mongoDB
 */
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', {
  useMongoClient: true, promiseLibrary: require('bluebird')
}).then(function () {
  console.log('connection succesful');
}).catch(function (err) {
  console.error(err);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(['/books', '/musics'], express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
app.use('/music', music);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
