var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber) {
  Phone.call(SmartPhone.prototype, phoneNumber);
  Tablet.call(SmartPhone.prototype);
  GameConsole.call(SmartPhone.prototype, 'Smart Phone');
  WebBrowser.call(SmartPhone.prototype);
}

module.exports = SmartPhone;