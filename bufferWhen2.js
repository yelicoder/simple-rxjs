const { interval, take, bufferWhen, tap } = require('rxjs');
 
const numbers = interval(100);

let i = 0;
numbers.pipe(
    take(15),
    tap(x => {
        i = x,
        console.log(x)
    }),
    bufferWhen( () => {
        if (i < 5) {
            return interval(300);
        } else {
            return interval(500);
        }        
    }),
  
)
.subscribe(sequence => {
    console.log(sequence);
});