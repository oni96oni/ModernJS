{
    var foo = 10;
}

var x = 1;

if( x < 10 ) {
    x++;
}

function sum(a, b) {
    return a + b;
}

var num = -1;
var kind;

if(num > 0) {
    kind = '양수';
}
console.log(kind);

if(num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}
console.log(kind);

if(num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind);