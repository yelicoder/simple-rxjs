const { interval, take, bufferTime } = require('rxjs');
 
const numbers = interval(100);
 
const takeSixNumbers = numbers.pipe(
    take(6),
    bufferTime(300,100));
 // opens the buffer every 100ms and close the buffer every 300ms
 // buffer opens/closes before the number emits
takeSixNumbers.subscribe(x => console.log('Next: ', x));