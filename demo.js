
var malloy = require('malloy'),
    configmalloy = require('malloy').adopt({});

console.log(malloy);

malloy.says("hello", {level : 'Woody', filename: __filename });
malloy.toWoody("hola", {})
