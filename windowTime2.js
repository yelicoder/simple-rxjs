const { interval, windowTime, take, switchMap, toArray } = require('rxjs');
 
const numbers = interval(100);

numbers.pipe(
    windowTime(400),
    take(5),
    switchMap(w=>w.pipe(toArray()))
)
.subscribe(sequence => {
    console.log(sequence);
});