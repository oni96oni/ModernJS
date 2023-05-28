var x = 1;

x++;

console.log(x);

var x = 5, result;

result = x++;
console.log(result, x);

result = ++x;
console.log(result, x);

result = x--;
console.log(result, x);

result = --x;
console.log(result, x);

console.log(1 + true); // 2 (암묵적 타입변환)

console.log( x = 10 ); // 할당문은 표현식인 문이다.

console.log(5 == '5'); // 동등비교연산자는 암묵적타입변환 후 비교

console.log(5 === '5'); //일치비교연산자는 암묵적타입변환 하지 않는다.

var x = 2;

var result = x % 2 ? '홀수' : '짝수';

console.log(result);

var foo = null;

typeof foo === null; // false
foo == null; // true

console.log(typeof foo); // object
console.log(foo === null); // true

console.log(typeof undeclared); // 선언하지 않은 변수 typeOf 연산시 undefined 반환