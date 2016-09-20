import * as express from 'express';

import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

let app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'angular')));

app.use("/", express.static(path.join(__dirname, 'views')));

// error handlers

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.statusCode || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;
