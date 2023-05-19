const num1 = 123;
const num2 = new Number(123);
console.log(num1); // 123
console.log(num2); // [Number: 123]

console.log(Number.MAX_VALUE); // 정수에서 출력할 수 있는 가장 큰 수

// 지수표기법 (매우 크나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2
// e+2 는 10의2승을 의미
// 1.02e+2는 1.02에 10의2승을 곱한다는 의미

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234

// 숫자 자체를 문자열로 반환
console.log(num4.toString()); // 1234.12 문자열

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
