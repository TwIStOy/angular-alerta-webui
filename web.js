var express = require('express');
var app = express();

var forceSsl = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    res.header("Strict-Transport-Security", "max-age=31536000");
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

app.set('port', (process.env.PORT || 5000));


var endpoint = 'https://alerta.incubator.agoralab.co/api';

app.get('/config.js', function(request, response) {

  var config = " \
    'use strict'; \
    angular.module('config', []) \
      .constant('config', { \
        'endpoint'    : 'http://localhost:8080/api', \
        'provider'    : 'basic', \
        'client_id'   : '', \
        'colors'      : {} \
      });";

  response.send(config);
});
app.use(express.static(__dirname + '/app'));

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});
