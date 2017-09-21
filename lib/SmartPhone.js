var extend = require('./extends');
var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

SmartPhone.prototype = Object.create(Phone.prototype, {
  constructor : Phone
});
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, Tablet.prototype);

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
  WebBrowser.call(this);
}

module.exports = SmartPhone;