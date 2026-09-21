const { EventEmitter } = require('events');

class Button extends EventEmitter {}

const button = new Button();
button.on('click', () => console.log('btn clicked'));
button.on('mouseover', () => console.log('mouseis over'));

button.emit('click');
button.emit('mouseover');