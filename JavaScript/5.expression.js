// 함수 선언문 function name(){}
// 함수 표현식 const name = function () {}
// 화살표 함수 const name = () => { }
let add = function (a, b) {
  //무명의 함수
  return a + b;
};
//함수도 객체이기 때문에 변수에 할당할 수 있음
console.log(add(1, 2)); //3
add = (a, b) => {
  return a + b;
};
// add = (a, b) => a + b
// 값만 반환하는 함수의 경우 이렇게 간단하게 축약해서 작성해도 됨

// 생성자 함수 const object = new Functon()
// object를 간편하게 만들 수 있는 함수
// 뒤 객체편에서 다룸

// 함수 자체는 선언문으로 할 때는 문이지만, 값으로 계산될 수 있는 표현식이다.

// IIFE (Immedicately-Invoked Function Expressions) 즉각적으로 호출하는 함수 표현식
(function run() {
  console.log("⭐️");
})();
// 함수를 ()로 감싸면 값으로 변환됨
// 값으로 변환된 함수 뒤에 ()를 붙여서 호출하면 바로 실행이 됨
// 함수를 정의하면서 바로 호출하고싶을 때 이 방법을 사용하면 됨
