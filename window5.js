const { interval, window, take, mergeAll,map } = require('rxjs');
 
const numbers = interval(100);

numbers.pipe(
    window(interval(1000)),
    map(win => win.pipe(take(2))),
    mergeAll(),
    take(5)
)
.subscribe(sequence => {
    console.log(sequence);
});