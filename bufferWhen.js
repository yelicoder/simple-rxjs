const { interval, take, bufferWhen, tap } = require('rxjs');
 
const numbers = interval(100);

numbers.pipe(
    tap(x => console.log(x)),
    bufferWhen( () => {
        return interval(300);
    }),
    take(3)
)
.subscribe(sequence => {
    console.log(sequence);
});