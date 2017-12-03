<h1 align="center">
    <img width="220" height=220 src="https://github.com/torokmark/malloy/blob/master/pic/malloy.jpg" alt="Malloy">
    <img width="400" src="https://github.com/torokmark/malloy/blob/master/pic/brickleberry.jpg" alt="Brickleberry">
    <br>
    <br>
    Malloy.js
</h1>




Malloy.js is a tiny, cute, cub library for logging inspired by the famous and celebrated sitcom series Brickleberry.

[![Npm Version](https://img.shields.io/npm/v/malloy.svg)](https://www.npmjs.com/package/malloy)
[![Build Status](https://travis-ci.org/torokmark/malloy.svg?branch=master)](https://travis-ci.org/torokmark/malloy)
[![Github All Releases](https://img.shields.io/github/downloads/torokmark/malloy/total.svg)](https://github.com/torokmark/malloy/)
[![GitHub license](https://img.shields.io/github/license/torokmark/malloy.svg)](https://github.com/torokmark/malloy/blob/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/torokmark/malloy/badge.svg)](https://snyk.io/test/github/torokmark/malloy)
[![Say Thanks!](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/torokmark)

Levels:
* `Malloy` informs the forrest!
* `Denzel` debugs it!
* `Woody` warns you!
* `Ethel` emits errors!
* `Steve` is severe!

## Install

```
npm install malloy
```

## Usage

```javascript
var malloy = require('malloy');
    adoptedMalloy = require('malloy').adopt({location: __filename, park: 'yellowstone', storage: '/home/username/log.out', dateformat: 'isoTime'});

malloy.says('hello');
malloy.says('hello', {to: 'denzel'});
malloy.says('The message in Yellowstone', {park: 'yellowstone'});
malloy.says('The message in Brickleberry', {park: 'brickleberry'});

malloy.saysToWoody('hello');
malloy.saysToDenzel();
malloy.saysToEthel('here the lipstick', {location: 'file...'});
malloy.saysToSteve('ohh it is severe!', {park: 'brickleberry'});
malloy.toDenzel('an animal like bug is over there', {animal: 'bug'} );
malloy.saysToDenzel('an animal like deer is not shown', {animal: 'deer'} );
malloy.toEthel('In Yellowstone', {park: 'yellowstone'});
malloy.toSteve('In Brickleberry', {park: 'brickleberry', storage: '/home/username/log.out'});

adoptedMalloy.toEthel('Ethel, what are you doing here?', {location: __filename, dateformat: 'isoDate'});
adoptedMalloy.toDenzel('Denzel is here and shown ', {animal: 'bug'});
adoptedMalloy.toDenzel('Denzel is here and shonw in Brickleberry', {animal: 'bug', park: 'brickleberry'});
adoptedMalloy.toSteve('hola stevie!');
```

