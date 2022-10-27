const { interval, take, bufferToggle, tap } = require('rxjs');
 
const numbers = interval(100);

const opening = interval(400).pipe(tap(() => console.log('open')));
const closing = () => interval(300).pipe(tap(() => console.log('close')));

 
numbers.pipe(
    tap(x => console.log(x)),
    bufferToggle(opening, closing),
    take(3)
)
.subscribe(sequence => {
    console.log(sequence);
});