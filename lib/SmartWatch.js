var watch = require('./Watch');
var tablet = require('./Tablet');

function SmartWatch() {
  Watch.call(SmartWatch.prototype);
  Tablet.call(SmartWatch.prototype);
}

module.exports = SmartWatch;