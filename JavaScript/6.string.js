const textObj = new String("Hello World!");
const text = "Hello World!";
console.log(textObj); // 객체로 출력
console.log(text); // 문자열 출력

console.log(text[0]); // H
// 함수로 접근
console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.length); // 12 문자열의 길이

console.log(text.indexOf("l")); // 2 문자의 인덱스
// 처음부터 찾으면 그 위치를 반환
console.log(text.lastIndexOf("l")); // 9 문자의 인덱스
// 뒤에서 부터 찾았을 때 그 위치를 반환

// 특정 문자가 있는지 확인
console.log(text.includes("tx")); // false
console.log(text.includes("h")); // false 대소문자 구분
console.log(text.includes("H")); // true 대소문자 구분

// 문자열이 특정한 문자로 시작하는지 아닌지 확인
console.log(text.startsWith("He")); // true
// 문자열이 특정한 문자로 끝나는지 아닌지 확인
console.log(text.endsWith("!")); // true

// 문자열 다 대문자로 변환
console.log(text.toUpperCase());
// 문자열 다 소문자로 변환
console.log(text.toLowerCase());

// 문자열에서 특정한 위치의 문자를 삭제
console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d! 뒤에서부터

// 문자열 공백 제거
const space = "           space           ";
console.log(space.trim()); // space

// 특정 문자를 기준으로 문자열 끊어서 배열로 반환
const longText = "Get to the point";
console.log(longText.split(" ")); // ['Get', 'to', 'the', 'point']
console.log(longText.split(" ", 2)); // ['Get', 'to'] 원하는 만큼만 반환할 수도 있음
