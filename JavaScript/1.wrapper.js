// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
// 자바스크립트는 필요에 따라서 원시타입을 한 단계 감싸는 wrapper 객체로 만들 수 있다.
// 어떤 원시타입이냐에따라서 그에 맞는 객체로 변환이 된다. (number -> Number)

const number = 123
// number 원시타입
console.log(number.toString());
// 평소에는 원시타입으로 사용되다가
// .을 찍고 함수를 호출하면
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐

const text = 'text' // string 문자열 원시타입 
console.log(text);
console.log(text.length);
console.log(text.trim());
// .을 찍으면
// String이라는 wrapper 객체가 만들어지고

