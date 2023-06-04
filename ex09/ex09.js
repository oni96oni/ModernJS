var x = 10;
console.log(typeof x, x);

var str = x.toString();
console.log(typeof str, str);

var x = 10;

var str = x + '';
console.log(typeof str, str);

console.log(typeof x, x);

console.log(+true);
console.log(+false);
console.log(+null);
console.log(+[]);
console.log(+[10, 20]);
console.log(undefined);

//Falsy 값들 이 외에는 전부 Truthy값들
if(!false) console.log(false + ' is falsy value');
if(!undefined) console.log(undefined + ' is falsy value');
if(!null) console.log(null + ' is falsy value');
if(!0) console.log(0 + ' is falsy value');
if(!'') console.log('' + ' is falsy value');

// 문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법
// 1. String생성자 함수를 new연산자 없이 호출하는 방법
String(1);

// 단축평가
var done = true;
var message = '';

if (done) message = '완료';

message = done && '완료';
console.log(message);

done = false;
if (done) message = '완료';
message = done && '완료';
console.log(message);

var done = false;
var message = '';
if (!done) message = '미완료';

message = done || '미완료';
console.log(message);

var done = true;
var message ='';

if (done) message = '완료';
    else message = '미완료';
console.log(message);

message = done ? '완료' : '미완료';
console.log(message);

// 단축 평가 유용한 사용방법(1)
// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
var elem = null;

// var value = elem.value;
// console.log(elem.value);  오류떠서 주석처리

// var value = elem && elem.value;
console.log(elem && elem.value);

// 단축 평가 유용한 사용방법(2)
// 함수 매개변수에 기본값을 설정할때
// 함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다.
// 이때 단축평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.
function getStringLength(str) {
    str = str || '';
    console.log(str.length);
    return str.length;
}

getStringLength();
getStringLength('hi');

function getStringLength(str = '') {
    console.log(str.length);
    return str.length;
}

getStringLength();
getStringLength('hi');

// function getStringLength(str) { // undefined는 읽을 수 없는 프로퍼티라고 한다.
//     console.log(str.length);
//     return str.length;
// }

// getStringLength();
// getStringLength('hi');


// 옵셔널 체이닝 연산자
var elem = null;

var value = elem?.value;
console.log(value);

value = elem && elem.value;
console.log(value);

var elem2 = {
    value : 'test'
};
value = elem2?.value;
console.log(value);
console.log('elem.value : ' + value);
// 여기 왜 null이 뜨는거지? test가 떠야 정상적인거 아닌가?
// -> 프로퍼티 참조를 이어가는것, 즉 객체안에 있는 값을 계속해서 참조하냐마냐니까 객체안에 값을 비교해야한다.

var str = '';

var length = str && str.length;

console.log(length);

// null 병합 연산자
var foo = null ?? 'default string';
console.log(foo);

var foo = 'test';

var foo2 = foo ?? 'default string';
console.log(foo2);

var foo = '' || 'default string';
console.log(foo);
console.log(typeof foo);

var foo = '' ?? 'default string';
console.log(foo);