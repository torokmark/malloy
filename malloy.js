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

  that.defaults = config || {};

  that.defaults.dateformat = that.defaults.dateformat || 'isoDateTime';
  that.defaults.park = that.defaults.park === 'yellowstone' ? 'yellowstone' : 'brickleberry';
  that.defaults.location = that.defaults.location || '';
  that.defaults.storage = that.defaults.storage || 'STDOUT';

  getDialect = function(to, park) {
    var level = {
      'DENZEL' : 'DEBUG',
      'WOODY' : 'WARNING',
      'MALLOY' : 'INFO',
      'ETHEL' : 'ERROR',
      'STEVE' : 'SEVERE'
    }
    if (park === 'brickleberry') {
      return to
    } else {
      return level[to];
    }
  }

  that.buildFullMsg = function(msg, to, config) {
    var config = config || {},
        log = '| ',
        to = to.toUpperCase(),
        dateformat = config.dateformat || that.defaults.dateformat,
        location = config.location || that.defaults.location,
        park = config.park || that.defaults.park;

    switch (to) {
      case 'DENZEL':
        log += colors.magenta(getDialect(to, park)); break;
      case 'WOODY':
        log += colors.yellow(getDialect(to, park)); break;
      case 'ETHEL':
        log += colors.red(getDialect(to, park)); break;
      case 'STEVE':
        log += colors.black.bgRed(getDialect(to, park)); break;       
      default:
        log += colors.white(getDialect('MALLOY', park));
    }
    
    log += ' | ' + dateFormat(Date.now(), dateformat); 
    log += ' | ' + location;
    log += ' >> ' + msg;
    return log;
  }

  that.log = function(msg, to, config) {
    var file = (config && config.storage) || that.defaults.storage,
        fullMsg = that.buildFullMsg(msg, to, config);

    if (file !== 'STDOUT' && fs.existsSync(path.dirname(file))) {
      let stream = fs.createWriteStream(file, {'flags' : 'a'});
      stream.once('open', function(fd) {
        stream.write(fullMsg + '\n');
        stream.end();
      });
    } else {
      console.log(fullMsg);       
    }
  }
}

Malloy.prototype.says = function(msg, config) {
    var config = config || {};
    this.log(msg, config.to || 'malloy', config);
}


Malloy.prototype.saysToDenzel = function(msg, config) {
  if (config && config.animal === 'bug') {
    this.log(msg, 'denzel', config);
  }
}
Malloy.prototype.toDenzel = Malloy.prototype.saysToDenzel;


Malloy.prototype.saysToWoody = function(msg, config) {
  this.log(msg, 'woody', config);
}
Malloy.prototype.toWoody = Malloy.prototype.saysToWoody;


Malloy.prototype.saysToEthel = function(msg, config) {
  this.log(msg, 'ethel', config);
}
Malloy.prototype.toEthel = Malloy.prototype.saysToEthel;


Malloy.prototype.saysToSteve = function(msg, config) {
  this.log(msg, 'steve', config);
}
Malloy.prototype.toSteve = Malloy.prototype.saysToSteve


module.exports = new Malloy();
module.exports.adopt = function(config) {
  if (config === undefined || config === null || config === {}) {
    throw new Error('configuration could not be found');
  }
  return new Malloy(config);
}
