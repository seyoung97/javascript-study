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
