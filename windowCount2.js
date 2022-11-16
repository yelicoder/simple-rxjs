const { interval, windowCount, take, switchMap, toArray } = require('rxjs');
 
const numbers = interval(100);

numbers.pipe(
    windowCount(2,3),
    take(5),
    switchMap(w=>w.pipe(toArray()))
)
.subscribe(sequence => {
    console.log(sequence);
});