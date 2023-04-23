// 단항 연산자 Unary operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a; // -1 * 5
console.log(a); // -5
console.log(-a); // 5

a = +a;
console.log(a); //5

a = -a; //-5
a = +a; // +(-5)
console.log(a); //-5

let boolean = true;
console.log(boolean); //true
console.log(!boolean); // false
console.log(!!boolean); // true

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); //0
console.log(+null); //0
console.log(+""); //0
console.log(+true); //1
console.log(+"text"); // NaN (Not a Number)
console.log(+undefined); // NaN (Not a Number)

// !! boolean 값으로 변환할 때 사용
console.log(!!1); // ! 한번만 하면 해당 값의 반대되는 불리언 값이 나옴 그래서 두 번 부정
// ! => 부정연산자
// !! => 값을 boolean 타입으로 변환
