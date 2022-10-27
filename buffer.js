const { interval, take, buffer } = require('rxjs');
 
const numbers = interval(100);
 
const takeFourNumbers = numbers.pipe(
    buffer(interval(1000)), take(4));
 
takeFourNumbers.subscribe(x => console.log('Next: ', x));