// 콜백함수
// 외부로부터 주어지는 함수
// 전달할 댱시에 바로 호출하는게 아니라 함수의 레퍼런스만 외부로부터 전달 받아서
// 나중에 함수 안에서 호출
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 된다.

function calculator(a, b, action) {
  // action -> 콜백함수
  let result = action(a, b); // 전달 받은 action 콜백함수에 a와 b를 넣어서 호출
  console.log(result);
  return result; // 그리고 결과 값을 반환
}

calculator(1, 2, add);
calculator(2, 3, multiply);
// add 를 전달만 할 뿐 호출하고 있지 않음
// add의 참조 값을 전달하는 것
