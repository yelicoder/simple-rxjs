const { interval, take, buffer } = require('rxjs');
 
const numbers = interval(100);
 
const takeFourNumbers = numbers.pipe(
    buffer(interval(1000)), take(4));
 
takeFourNumbers.subscribe(x => console.log('Next: ', x));

/*
interval returns an Observable that emits an infinite sequence of 
ascending integers, with a constant interval of time of your 
choosing between those emissions. 
The first emission is not sent immediately, 
but only after the first period has passed.
This is why the result of this code is 0-8 and 9-18 etc.
*/