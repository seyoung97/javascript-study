// 객체를 만드는 방법
// Object literal {key: value}
// new Object()
// Object.create()
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: "apple",
  hello: "✨",
  0: 1,
  ["hello-bye"]: "bye",
};

// 속성, 데이터에 접근하는 방법
// 마침표 표기법 dot notation
apple.name;

// 대괄호 표기법 bracket notation
// key에 특수문자가 사용됐을 경우
apple["hello-bye"];

// 속성 추가
apple.emoji = "🍎";

// 속성 삭제
delete apple.emoji;
