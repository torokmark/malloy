// Malloy.js
// Author: Mark Torok
// Version: 0.0.1
// Liscence: MIT

var path = require('path');

var Malloy = function Malloy(config) {
  var that = this,
  
  that.format = function() {
    // [level] date time path :: message
    return true;
  }
}

Malloy.prototype.says = function(msg, config) {
  this.print
}



module.exports = new Malloy();
module.exports.adopt = function(config) {
  return new Malloy(config);
}
