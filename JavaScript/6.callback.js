// 콜백함수
// 외부로부터 주어지는 함수
// 전달할 댱시에 바로 호출하는게 아니라 함수의 레퍼런스만 외부로부터 전달 받아서
// 나중에 함수 안에서 호출
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action) {
  // action -> 콜백함수
  let result = action(a, b); // 전달 받은 action 콜백함수에 a와 b를 넣어서 호출
  console.log(result);
  return result; // 그리고 결과 값을 반환
}
