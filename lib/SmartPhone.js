var phone = require('./Phone');
var tablet = require('./Tablet');
var gameConsole = require('./GameConsole');
var webBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber) {
  phone.call(SmartPhone.prototype, phoneNumber);
  tablet.call(SmartPhone.prototype);
  gameConsole.call(SmartPhone.prototype, 'Smart Phone');
  webBrowser.call(SmartPhone.prototype);
}

module.exports = SmartPhone;