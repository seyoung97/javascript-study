// let 재할당 가능 
let a = 1
a =2

//재할당이 불가능한 const 
// 1. 상수
// 2. 상수변수 또는 변수 라고 부름
const text = 'hello'
// text = 'hi' 이렇게 재할당하면 에러남

//상수변수를 언제 사용?
// 1. 상수처럼 쓰고 싶을 때
// 상수란 한 번 정해지면 바뀔 수 없는 값을 의미
const MAX_FRUITS = 5 //최대로 가질 수 있는 과일의 값 
// 상수를 표현하는 변수는 항상 대문자, '_' 조합으로 작성해야함

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};

