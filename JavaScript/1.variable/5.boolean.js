// 불리언 타입
let 참 = true;
let 거짓 = false;

// 활용 예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;

// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!null);
console.log(!!""); //빈 문자열
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{}); //오브젝트가 비어있기는 하지만 오브젝트 자체가 있기 때문에 true
console.log(!!Infinity);
