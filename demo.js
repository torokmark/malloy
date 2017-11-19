
var malloy = require('malloy'),
    configmalloy = require('malloy').adopt({location: __filename, park: 'yellowstone', storage: '/home/mint/log.out', dateformat: 'isoTime'});


malloy.says('hello');
malloy.says();
malloy.says('data go to', {location: 'file...'});
malloy.says('hello', {to: 'denzEl'});
malloy.says('just in the air', {to: 'ddddenzEl'});
malloy.says('something in', {park: 'yellowstone'});
malloy.says('something else in', {park: 'brickleberry'});

malloy.saysToWoody('hello');
malloy.saysToDenzel();
malloy.saysToEthel('here the lipstick', {location: 'file...'});
malloy.saysToSteve('ohh it is severe!', {park: 'brickleberry'});
malloy.toDenzel('an animal like bug is over there', {animal: 'bug'} );
malloy.saysToDenzel('an animal like deer is not shown', {animal: 'deer'} );
malloy.toEthel('In Yellowstone', {park: 'yellowstone'});
malloy.toSteve('In Brickleberry', {park: 'brickleberry', storage: '/home/mint/log.out'});

configmalloy.toEthel('hhhh', {location: '....', dateformat: 'isoDate'});
configmalloy.toDenzel('dennzzz', {animal: 'bug'});
configmalloy.toDenzel('dennzzz in brick', {animal: 'bug', park: 'brick'});
configmalloy.toSteve('hola stevie!');



