// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a); //1
console.log(b); //2

// 객체타입은 참조값(메모리주소, 레퍼런스가 복사되어 전달됨)
let apple = {
  // 주소값이 0x1234면
  name: "apple",
};

let orange = apple; // 오렌지 변수에 0x1234가 복사됨
orange.name = "orange";
console.log(apple); //{name:'orange'}
console.log(orange); //{name:'orange'}
// 같은 주소 값을 참조하고 있기 때문에 orange.name만 변경해도 apple도 같이 변경됨
// 같은 오브젝트를 가리키고 있기 때문
