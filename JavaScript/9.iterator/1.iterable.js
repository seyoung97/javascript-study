// Iterable 하다는건 순회가 가능하다는 것
// iterable protocol을 따라야 함
// [Symbol.iterator](): Iterator;
// Symbol.iterator를 호출했을 때 Iterator(next, next 호출이 가능한)를 반환
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 빙글 빙글 도는 for...of, spread 연산자를 사용할 수 있음

const array = [1, 2, 3];
// for...of 연산자
for (const item of array) {
  console.log(item);
}
// 배열 안에 있는 item 하나 하나를 순회할 수 있음
// 배열은 iterator protocol을 따르기 때문에
// for of를 사용하면 array 안에 있는 symbol iterator를 호출

const obj = { 0: 1, 1: 2 };
// for (const item of obj) {
//   console.log(item);
// }
// error
// 객체는 iteratol protocol을 따르지 않음

const iterator = array.values();
// for (const item of iterator) {
//   console.log(item);
// }

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
