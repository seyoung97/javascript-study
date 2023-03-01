//null, undefined
let variable;
console.log(variable); // undefined
//값이 있는지 없는지 값이 무엇인지 아직 아무것도 확정되지 않은 상태

variable = null; // null 값을 할당
// 값이 있어야하는데 값이 없는 상태
// 비어있는 변수라는 표현

// Example
let flower; // undefined
// 값이 있는지 없는지 값이 꽃인지 정해지지 않은 상태

flower = null; // null
// 원래 값은 꽃이어야하지만 값이 없도록 null을 할당

flower = flower; // 꽃
// 꽃이라는 값을 갖고 있음

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

console.log(typeof 123);
console.log(typeof null); // object
//자바스크립트 자체에서 null이라는 것을 표현하기 위해 object를 만들어서 표현하기 때문
console.log(typeof undefined); // undefined
