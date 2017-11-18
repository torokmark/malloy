// Malloy.js
// Author: Mark Torok
// Version: 0.0.1
// Liscence: MIT

var path = require('path'),
    dateFormat = require('dateformat'),
    colors = require('colors');

var Malloy = function Malloy(config) {
  var that = this;
  // file : __filename
  // style: brickleberry vs formal
  // dateformat
}

Malloy.prototype.says = function(msg, config) {
  console.log('| ' + colors.yellow(config.level) + ' | ' + dateFormat(Date.now(), 'dd.mm.yyyy hh:MM:ss') + ' | ' + config.filename + ' >> ' + msg);
}

Malloy.prototype.saysToWoody = function(msg, config) {
  config.level = 'Woody';
  this.says(msg, config);
}
Malloy.prototype.toWoody = Malloy.prototype.saysToWoody;




module.exports = new Malloy();
module.exports.adopt = function(config) {
  return new Malloy(config);
}
