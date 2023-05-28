var integer = 10;
var double = 10.12;
var negative = -20;

var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(hex === octal);

// 백틱(`)을 사용해서 값을 할당하면 템플릿 리터럴이다.
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

var template2 = `<ul>
<li><a href="#">Home</a></li>
</ul>`;
console.log(template2);

var first = 'Ung-mo';
var last = 'Lee';

console.log('My name is ' + first + ' ' + last + '.');

console.log(`My name is ${first} ${last}.`);

console.log(`1 + 2 = ${1 + 2}`);

console.log('1 + 2 = ${1 + 2}');

var key = Symbol('key');
console.log(typeof key);
console.log(key);
var obj = {};

obj[key] = 'value';
console.log(obj[key]);

key = 'change';

console.log(key);

obj[key] = 'changetest';
console.log(obj[key]);

// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key);

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]);

var foo;
console.log(foo);

foo = 3;
console.log(typeof foo);

foo = 'Hello';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = [];
console.log(typeof foo);

foo = function() {};
console.log(typeof foo);