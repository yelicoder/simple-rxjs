const { interval, take, bufferCount } = require('rxjs');
 
const numbers = interval(100);
 
const takeFourNumbers = numbers.pipe(
    bufferCount(3,1), take(4));
 
takeFourNumbers.subscribe(x => console.log('Next: ', x));