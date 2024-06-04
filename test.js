var Keyboard = require('./index');

var k = new Keyboard('event0'); // Replace 'event0' with the correct event file for your keyboard in /dev/input/
k.on('keyup', console.log);
k.on('keydown', console.log);
k.on('keypress', console.log);
k.on('error', console.error);
