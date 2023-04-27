// 산술 연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수 (거듭제곱)

console.log(5 + 2); // 7
console.log(5 % 2); //1
console.log(5 ** 3); //125 es7에 추가
console.log(Math.pow(5, 3)); // es7 나오기 전 거듭제곱하는 방법

// + 연산자 주의점!
let text = "두개의" + "문자를";
text = "1" + 1;
console.log(text); // 문자열 11, 숫자와 문자열을 더하면 문자열로 변환됨
