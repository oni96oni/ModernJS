const o = {};

// o.[[Prototype]]

o.__proto__

console.log(o.__proto__);

// -----------------------------

const person = {
    name : 'Cha"'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// -------------------------------

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

// -------------------------------

const person2 = {
    firstName : 'hak',
    lastName : 'sun',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person2.firstName + ' ' + person2.lastName);

person.fullName = 'haksun';
console.log(person2);

console.log(person2.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor); // 데이터 프로퍼티

descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor); // 접근자 프로퍼티

// --------------------------------

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__') + '!!');

console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype') + '!!');

// --------------------------------

const person3 = {};

Object.defineProperty(person3, 'fisrtName', {
    value : 'Ungmo',
    writable : true,
    enumerable : true,
    configurable : true
});

Object.defineProperty(person3, 'lastName', {
    value : 'Lee'
});

let descriptor3 = Object.getOwnPropertyDescriptor(person3, 'firstName');
console.log('firstName', descriptor3);

descriptor3 = Object.getOwnPropertyDescriptor(person3, 'lastName');
console.log('lastName', descriptor3)

console.log(Object.keys(person3));

person3.lastName = 'Kim';

delete person3.lastName;

descriptor3 = Object.getOwnPropertyDescriptor(person3, 'lastName');
console.log('lastName', descriptor);

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable : true,
    configurable : true
});

descriptor3 = Object.getOwnPropertyDescriptor(person3, 'fullName');
console.log('fullName', descriptor);

person3.fullName = 'Heegun Lee';
console.log(person3);