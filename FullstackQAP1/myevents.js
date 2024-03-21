// Node.js is mainly event-driven programming
// the events module allows you to create custom events and define how they should be handled

const EventEmitter = require('events');
console.log('myevents Script is running');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (arg) => {
    console.log('custom event with argument:', arg);
});

myEmitter.emit('customEvent', 'EventEmitter');