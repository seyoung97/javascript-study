// 매개변수의 기본값은 무조건 undefined
// 즉, 함수를 호출할 때 매개변수에 아무것도 전달하지 않으면 그 매개변수는 undefined
// 단, 매개변수의 기본값(default parameters)을 설정해 매개변수가 전달되지 않은 상황에서는 지정한 기본값을 갖도록 할 수 있음
// 외부에서 값이 전달되면 기본값은 무시되고 그 값으로 함수가 실행됨
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨

function add(a = 1, b = 2) {
  //매개변수 a의 기본값을 1로, b의 기본값을 2로 설정
  console.log(a);
  console.log(b);
  console.log(arguments[0]); //매개변수 a가 출력됨
  console.log(arguments[1]); //매개변수 b가 출력됨
  return a + b;
}

//Rest 매개변수 Rest parameters
//인자의 개수가 정해지지 않았을 때 인자들을 통으로 배열로 받아옴
function sum(a, b, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // [3, 4, 5, 6, 7, 8]
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
