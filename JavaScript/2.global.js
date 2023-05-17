// 전역에서 사용할 수 있는 속성 및 함수

console.log(globalThis)
// node에서 사용하는 global 객체 출력

console.log(this)
// 자바스크립트에서는 대체적으로 전역객체를 의미
// 노드에서는 의미가 조금 다름, 현재 모듈에 있는 정보를 출력

console.log(Infinity)
console.log(NaN)
console.log(undefined)

// eval 함수
// 자바스크립트를 한줄 한줄씩 표현할 수 있음
eval('const num = 2; console.log(num)') 
// 2 가 출력됨
// 문자열로 작성한 코드를 자바스크립트로 평가해서 출력함

// isFinite 함수
// 유한한 숫자인지 평가
console.log(isFinite(1)); // true
console.log(Infinity); // 무한대 값이기 때문에 false

// palse
console.log(parseFloat('12.34'));
// 12.34
// 문자열이지만 숫자인 경우 
// 숫자로 변환
console.log(parseInt('12.34'));
// 12
// 문자열 안에 있는 숫자를 정수로 변환

// encodeURI
// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리(정해진 다른 문자로 변환) 할 때 사용
const URL = "https://드림코딩.com"
const encoded = encodeURI(URL)
const decoded = decodeURI(encoded) // 다시 한국어로 decode
// 백 프론트 통신할 때 유용하게 사용

// 전체 URL이 아니라 부분적일 때는 Component 사용
const part = '드림코딩.com'
console.log(encodeURIComponent(part));
