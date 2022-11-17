const { timer, windowToggle, take, switchMap, toArray } = require('rxjs');
 
const open = timer(0,500);
const close = () => timer(200);

timer(0,100)
.pipe(
    take(36),
    windowToggle(open, close), // close 200ms after opening
    switchMap(s=>s.pipe(toArray()))
)
.subscribe(sequence => {
    console.log(sequence);
});