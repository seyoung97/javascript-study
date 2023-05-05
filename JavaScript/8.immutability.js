// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 매우 좋지 않음!
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소) => 심각한 문제를 일으킬 수 있음
function display(num) {
  num = 5; //함수내부에서 인자의 값을 변경 -> 매우 안좋음
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

// 객체값을 함수 내부에서 변경할 경우
function displayObj(object) {
  //참조값을 전달 받음 결국 ellie와 같은 오브젝트를 변경하는 것
  object.name = "Bob"; // {name: "Bob"}
  //외부로 부터 주어진 인자(오브젝트)를 내부에서 절대 변경하면 안됨
  console.log(object);
}
const ellie = { name: "Ellie" }; // ellie라는 변수에는 객체가 저장된 메모리 주소(참조값)가 할당됨
displayObj(ellie);
console.log(ellie); // {name: "Bob"}

// 함수 내부에서 꼭 변경해야하는 경우
function changeName(obj) {
  // 함수의 이름부터 변경하는 느낌 주도록 작성
  return { ...obj, name: "Bob" };
  // 반환할때는 새로운 오브젝트 만들기!
  // 오브젝트 리터럴을 사용하여 새로운 오브젝트를 만들고
  // 스프레드 함수로 obj를 그대로 가져오되 name 만 변경하도록 작성
}
