// Generated by CoffeeScript 1.7.1
var log, recognizer;

recognizer = require('../addons/build/Release/recognizer');

log = function(msg) {
  return console.log(msg);
};

recognizer.initialize(log);

exports.bind = function(app) {
  return app.get('/api/recognize/recognize', function(req, res) {
    var result;
    result = recognizer.recognize('pan', [1, 2, 3, 4]);
    return res.send(200, result);
  });
};