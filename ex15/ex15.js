console.log(foo);

foo = 123;

console.log(foo);

var foo;

let bar = 123;

// let bar = 456;

let foo2 = 1;

{
    let foo2 = 2;
    let foo3 = 3;
    console.log(foo2);
}

console.log(foo2);

//

console.log(foo4);

var foo4;
console.log(foo4);

foo4 = 1;

console.log(foo4);

//

// console.log(foo5); // 초기화전에 접근불가 에러 발생

let foo5;
console.log(foo5);

foo5 = 1;
console.log(foo5);

//

{

    // console.log(con1); // 초기화전에 접근불가 에러 발생

    const con1 = 1

    console.log(con1);

}

// console.log(con1); // 초기화전에 접근불가 에러 발생


// -----------------------------


const con2 = 1;
// con2 = 5; // const변수는 재선언 불가
console.log(con2);

// -----------------------------

let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice);

// ------------------------------

const TAX_RATE = 0.1;

afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice);

// ------------------------------

