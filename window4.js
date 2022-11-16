const { interval, window, take, mergeAll,map } = require('rxjs');
 
const numbers = interval(100);

numbers.pipe(
    window(interval(1000)),
    map(win => win.pipe(take(2))),
    take(5),
    mergeAll()
)
.subscribe(sequence => {
    console.log(sequence);
});