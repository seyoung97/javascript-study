//object
let name = "apple";
let color = "red";
let display = "🍎";
let orangeName = "orange";
// 이렇게 오브젝트를 사용하지 않으면 과일마다 변수명을 계속 바꿔야함
// 또 데이터가 많아지면 name, color, display 가 같은 묶음이라는 것을 알기 어려움
// 연관된 데이터를 그룹화 할 수 있는 것이 바로 object 형식이다.

let apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};
console.log(apple);
console.log(apple.name);

let orange = {
  name: "orange",
  color: "orange",
  display: "🍊",
};
console.log(orange);
