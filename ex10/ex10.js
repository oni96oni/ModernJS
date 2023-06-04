var person = {
    name : 'Cha',
    sayHello : function() {
        console.log(`Hello! My name is +  ${this.name}`);
    }
};

console.log(person);

person.sayHello();

var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);

var foo = {
    name : 'test',
    name : 'test2'
};
console.log(foo);

var number = {
    1 : 10
};
console.log(number[1]);
console.log(number['1']);

var person = {
    name : 'Lee'
};
console.log(person.age);

person.name = 'Kim';
console.log(person);

person.age = '20';
console.log(person);

delete person.age;
console.log(person);

var x = 1, y = 2;
var obj = {x, y};
console.log(obj);

var prefix = 'prop';
var i = 0;
var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);

var obj = {
    name : 'Lee',
    sayHi() {
        console.log('Hi ' + this.name);
    }
};
console.log(obj);
obj.sayHi();

var obj2 = {
    name : 'Cha',
    sayHello() {
        console.log(`Hi ${this.name}`);
    }
}
console.log(obj2);
obj2.sayHello();