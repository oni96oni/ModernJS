var x = 'global';

function foo() {
    console.log(x);
    var x = 'local';
}

foo();
console.log(x);

// 즉시 실행 함수
(function () {
    var foo2 = 10;
    console.log(foo2);
}());

// 네임스페이스 객체
var MYAPP = {};

MYAPP.name = 'Lee';

console.log(MYAPP.name);

MYAPP.person = {
    name : 'Cha',
    address : 'Seoul'
}
console.log(MYAPP.person);

// 모듈패턴
var Counter = (function () {
    // private 변수
    var num = 0;

    return {
        increase() {
            return ++num;
        },

        decrease() {
            return --num;
        }

    }
}());

console.log(Counter.num);

console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.increase());
console.log(Counter.increase());