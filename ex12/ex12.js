function add(x, y) {
    return x + y;
}

console.dir(add);
console.log(add(2,5));

function foo() { console.log('foo');}
foo();

(function bar () { console.log('bar');});
// bar(); // 에러발생

var add = function foo (x, y) {
    return x + y;
}
console.log(add(2,5));
console.log(foo(2,5));

// 함수 생성 시점과 함수 호이스팅
// console.dir(add);
// console.dir(sub);

// console.log(add(2,5));
// console.log(sub(2,5));

// function add(x, y) {
//     return x + y;
// }

// var sub = function(x, y) {
//     return x - y;
// };

var add = new Function('x', 'y', 'return x + y');
console.log(add(2,5));

var add1 = (function() {
    var a = 10;
    return function(x, y) {
        return x + y + a
    };
}());
console.log(add1(2,2));

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());
// console.log(add2(1,2));

// 화살표 함수

const add3 = (x, y) => x + y;
console.log(add3(2,5));

function add5(x, y) {
    console.log(arguments);
    console.log('출력테스트');
    return x + y;
}

add5(2,5,10);
console.log(add5(2,5,10));

// 단축평가
function add6(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    console.log(a+b+c);
    return a + b + c;
}
add6(1,2,3);
add6(1,2);
add6(1);

function changeVal(privitive, obj) {
    privitive += 100;
    obj.name = 'Kim';
    console.log(privitive);
}

var num = 100;
var person = { name : 'Lee' };

console.log(num); // 100
console.log(person); // name : 'Lee'

changeVal(num, person);

console.log(num); // 100
console.log(person); // name : 'Kim'

// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    console.log(a*b);
    return a * b;
}());

function countdown(n) {
    if(n < 0) return;
    console.log(n);
    countdown(n-1);
}
countdown(5);

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
factorial(5);
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));

console.log(!!0);

function factorial2(n) {
    if(n <= 1) return 1;
    var res = n;
    while(--n) res *= n;
    return res;
}
console.log(factorial2(5));

// 콜백함수
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i); // logAll 함수 호출
    }
}

var logAll = function(i) {
    console.log(i);
}

repeat(5, logAll);

var logOdds = function(i) {
    if ( i % 2 ) console.log(i);
}

repeat(5, logOdds);

repeat(5, function(i) {
    if (i%2) console.log(i);
});

// 배열고차함수
var res = [1, 2, 3].map(function (item) {
    return item * 2;
});

console.log(res);

res = [1, 2, 3].filter(function (item) {
    return item % 2;
});

console.log(res);

res = [1,2,3].reduce(function(acc, cur) {
    return acc + cur;
}, 0);

console.log(res);

// 순수, 비순수 함수
var count = 0;

function increase(n) {
    return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

var count = 0;

function increase2() {
    return count++;
}

increase2();
console.log(count);