// Malloy.js
// Author: Mark Torok
// Version: 0.0.1
// Liscence: MIT

var path = require('path'),
    fs = require('fs'),
    dateFormat = require('dateformat'),
    colors = require('colors');

var Malloy = function Malloy(config) {
  var that = this;
  if (config.filepath === undefined || config.filepath === null || fs.existSync(path.dirname(config.filepath)) ) {

  } else {
    throw new Error("filepath could not be found")
  }
  // file : __filename
  // style: brickleberry vs formal
  // dateformat
}

Malloy.prototype.says = function(msg, config) {
  console.log('| ' + colors.yellow(config.level) + ' | ' + dateFormat(Date.now(), 'isoDateTime') + ' | ' + config.filename + ' >> ' + msg);
}


Malloy.prototype.saysToDenzel = function(msg, config) {
  config.level = 'Denzel';
  this.says(msg, config);
}
Malloy.prototype.toDenzel = Malloy.prototype.saysToDenzel;


Malloy.prototype.saysToWoody = function(msg, config) {
  config.level = 'Woody';
  this.says(msg, config);
}
Malloy.prototype.toWoody = Malloy.prototype.saysToWoody;


Malloy.prototype.saysToEthel = function(msg, config) {
  config.level = 'Ethel';
  this.says(msg, config);
}
Malloy.prototype.toEthel = Malloy.prototype.saysToEthel;


Malloy.prototype.saysToSteve = function(msg, config) {
  config.level = 'Steve';
  this.says(msg, config);
}
Malloy.prototype.toSteve = Malloy.prototype.saysToSteve


module.exports = new Malloy();
module.exports.adopt = function(config) {
  return new Malloy(config);
}
