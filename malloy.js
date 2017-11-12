// Malloy.js
// Author: Mark Torok
// Version: 0.0.1
// Liscence: MIT

var path = require('path');

var Malloy = function Malloy(config) {

}

Malloy.says = function(msg, config) {
  console.log(msg);
}

module.exports.Malloy = new Malloy();
/*exports.says = function(msg) {
  console.log('hola');
}*/

