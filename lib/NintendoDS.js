var gameConsole = require('./GameConsole');
var webBrowser = require('./WebBrowser');

function NintendoDS() {
  GameConsole.call(NintendoDS.prototype, 'Nintendo DS');

  WebBrowser.call(NintendoDS.prototype);
}

module.exports = NintendoDS;