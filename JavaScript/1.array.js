// 배열 생성 방법
// 생성자 함수로 만들기
let array = new Array(3);
console.log(array); // [ <3 empty items> ]

array = new Array(1, 2, 3);
console.log(array); // [1, 2, 3]

// static 함수로 만들기
array = Array.of(1, 2);
console.log(array); //[1, 2]

// 배열 리터럴로 만들기
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray); // [1, 2, 3, 4]

// Array.from()
array = Array.from(anotherArray);
console.log(array); // [1, 2, 3, 4]
// 기존의 array를 복사해서 새롭게 만들어줌

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있고
// 오브젝트와 유사함! (다른 데이터 타입도 넣을 수 있음)
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed collection)
array = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
console.log(array); // ['안', '녕']

// 오브젝트에 인덱스 키와 배열의 길이만 있으면 배열처럼 만들 수 있음
