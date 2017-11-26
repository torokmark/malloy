<h1 align="center">
    <img width="220" height=220 src="https://github.com/torokmark/malloy/blob/master/malloy.jpg" alt="Malloy">
    <img width="400" src="https://github.com/torokmark/malloy/blob/master/brickleberry.jpg" alt="Brickleberry">
    <br>
    <br>
</h1>


# malloy.js

Malloy.js is a tiny, cute, cub library for logging inspired by the famous and celebrated sitcom series Brickleberry.

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

