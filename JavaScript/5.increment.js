// 증가 & 감소 연산자 Increment & Decrement operators
let a = 0;
console.log(a); //0

a++; //a = a + 1
console.log(a); //1

a--; // a = a-1
console.log(a); //0
console.clear();

// 주의!
// 연산자를 앞에다가 작성하는지 뒤에다가 작성하는지에 따라 결과가 다름
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산을 함
// -- 도 마찬가지
a = 0;
let b = a++;
console.log(b); //0
console.log(a); //1
// ++가 뒤에 있기 때문에 값을 증가시키기 전에 =(할당연산자)가 먼저 실행됨,
// a는 증가되기 전이기 때문에 0임.
// 따라서 b에 0이 할당된 후 a의 값이 증가 됨

c = 0;
let d = ++c;
console.log(d); //1
console.log(c); //1
// ++가 앞에 있기 때문에 먼저 c의 값을 1로 증가시킨 후 b에 c를 할당함
// -- 도 동일

e = 0;
console.log(e++); //0 => ++가 뒤에 있기 떄문에 출력하는 연산을 먼저 실행
console.log(e); //1
