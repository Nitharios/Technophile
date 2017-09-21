var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch() {
  Watch.call(SmartWatch.prototype);
  Tablet.call(SmartWatch.prototype);
}

module.exports = SmartWatch;