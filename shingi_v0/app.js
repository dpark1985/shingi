var express         = require('express');
var socket_io       = require('socket.io');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var everyauth       = require('everyauth');
var mongojs         = require('mongojs');
var expressSession  = require('express-session');
var crypto          = require('crypto');

// import main routes
var mainRoute = require('./routes/main/mainRouteConfig');
var mainCtrl = require('./routes/main/mainCtrlConfig');
var mainModel = require('./routes/main/mainModelConfig');

// import admin routes
var admin = require('./routes/admin/adminRouteConfig');
var adminCtrl = require('./routes/admin/adminCtrlConfig');

// import custom module
var customAuth = require('./routes/auth/auth');
var customAuthSuccess = require('./routes/auth/authSuccess');

// MongoDB setup
var config = require('./config/config');
var connection = config().connection();
var collections = config().dbCollections();
var db = mongojs(connection, collections);

// Express
var app = express();

// Socket.io
var io = socket_io();
app.io = io;

// execute imported custom module
customAuth.active(everyauth, db, crypto);

// view engine setup
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret: 'spa',
    name: 'spa',
    resave: true,
    saveUninitialized: false
}));
app.use(everyauth.middleware(app));
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
    req.db = db;
    next();
});


app.use(function (req, res, next) {
    req.io = app.io;
    next();
});

app.use('/authSuccess', customAuthSuccess);

app.use('/adminCtrl', adminCtrl);
app.use('/admin', admin);

app.use('/mainCtrls', mainCtrl);
app.use('/mainModels', mainModel);
app.use('/', mainRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
