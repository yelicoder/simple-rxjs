const { of, map, filter } = require('rxjs');

of (1,2,3)
.pipe(map(x=> x*x))
.subscribe(v => console.log(v));

console.log("============")
of (1,2,3,4)
.pipe(
    filter(x => x%2 === 0),
    map(x => x*x)
)
.subscribe(v => console.log(v));