// Generated by CoffeeScript 1.7.1
var folder, fs, index, path;

path = require('path');

fs = require('fs');

folder = path.resolve('apis');

index = 'pages/index.html';

exports.start = function(app) {
  var api, files, _i, _len;
  files = fs.readdirSync(folder);
  for (_i = 0, _len = files.length; _i < _len; _i++) {
    api = files[_i];
    if (path.extname(api) === '.js') {
      (require(path.join(folder, api))).bind(app);
    }
  }
  return app.get('/', function(req, res) {
    return res.sendfile(index, {
      root: __dirname
    });
  });
};
