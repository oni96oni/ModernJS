var var1 = 1;

if(true) {
    var var2 = 2;
    if(true) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4;

    function bar() {
        var var5 = 5;
    }
}

console.log("var1 = " + var1);
console.log("var2 = " + var2);
console.log("var3 = " + var3);
// console.log("var4" + var4); is not defined 에러 발생
// console.log("var5" + var5);

function foo2() {
    console.log('global function foo');
}

function bar2() {
    foo2();
    function foo2() {
        console.log('local function foo');
    }
    foo2();
}

bar2(); // 여기서 local function foo가 2번 찍히는 이유는?
// 호이스팅으로 인해서 미리 정의가 되니까 지역스코프에서 실행하므로 지역스코프의 함수가 실행되는것아닐까?

var x = 1;

function foo3() {
    var x = 10;
    bar3();
}

function bar3() {
    console.log(x);
}

foo3();
bar3();