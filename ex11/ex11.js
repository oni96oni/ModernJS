const o = {};

o.a = 1;
console.log(o);

// o = {}; // 에러가 발생한다. 상수에 재할당을 하면
// console.log(o);

var score = 80;
var copy = score;

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);

var score2 = 80;

var copy2 = score2;

console.log(score2, copy2);
console.log(score2 === copy2);

score2 = 100;

console.log(score2, copy2);
console.log(score2 === copy2);

const a = { x : { y : 1 }};

// 얕은복사
const c1 = {...a};
console.log(c1 === a);
console.log(c1.x === a.x);

var _ = require('lodash');

// 깊은복사
const c2 = _.cloneDeep(a);
console.log(c2 === a);
console.log(c2.x === a.x);

var person1 = {
    name : 'Lee'
};

var person2 = {
    name : 'Lee'
};

console.log(person1 === person2);
console.log(person1.name === person2.name);