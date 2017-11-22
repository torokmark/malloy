# malloy.js

Malloy.js is a tiny, cute, cub library for logging.

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

```
var malloy = require('malloy');
    adoptedMalloy = require('malloy').adopt({location: __filename, park: 'yellowstone', storage: '/home/mint/log.out', dateformat: 'isoTime'});

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
malloy.toSteve('In Brickleberry', {park: 'brickleberry', storage: '/home/mint/log.out'});

adoptedMalloy.toEthel('Ethel, what are you doing here?', {location: __filename, dateformat: 'isoDate'});
adoptedMalloy.toDenzel('Denzel is here and shown ', {animal: 'bug'});
adoptedMalloy.toDenzel('Denzel is here and shonw in Brickleberry', {animal: 'bug', park: 'brickleberry'});
adoptedMalloy.toSteve('hola stevie!');
```

