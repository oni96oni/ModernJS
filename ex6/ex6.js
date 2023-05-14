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