const { interval, window, take, mergeAll } = require('rxjs');
 
const numbers = interval(100);

numbers.pipe(
    window(interval(1000)),
    take(5),
    mergeAll()
)
.subscribe(sequence => {
    console.log(sequence);
});