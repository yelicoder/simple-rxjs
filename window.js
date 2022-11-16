const { interval, window, take, switchMap, toArray } = require('rxjs');
 
const numbers = interval(100);

numbers.pipe(
    window(interval(1000)),
    take(5),
    switchMap(w=>w.pipe(toArray()))
)
.subscribe(sequence => {
    console.log(sequence);
});