var extend = require('./extends');

var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function NintendoDS() {
  GameConsole.call(NintendoDS.prototype, 'Nintendo DS');

  WebBrowser.call(NintendoDS.prototype);
}

module.exports = NintendoDS;