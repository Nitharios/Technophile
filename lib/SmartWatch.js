var extend = require('./extends');
var Watch = require('./Watch');
var Tablet = require('./Tablet');

SmartWatch.prototype = Object.create(Watch.prototype, {
  constructor : Watch
});
extend(SmartWatch.prototype, Tablet.prototype);

function SmartWatch() {
  Watch.call(this);
}

module.exports = SmartWatch;