// 구조 분해 할당 Dstructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다.
const fruits = ["🍎", "🍇", "🍑", "🍊"];
const [first, second, ...others] = fruits;
console.log(first); // 🍎
console.log(second); // 🍇
console.log(others); // [ '🍑', '🍊' ]
// 배열 안에서 조금 더 의미 있는 이름으로 전달할 수 있음

const point = [1, 2, 8];
const [x, y, z = 0] = point;
// point에는 z에 해당하는 3번쨰 아이템이 없기 때문에
// z의 기본값을 설정
// point에 값이 있으면 있는 값이 우선순위가 높아서 있는 값으로 전달됨
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// function
function createEmoji() {
  return ["apple", "🍎"];
}
const [title, emoji] = createEmoji();
console.log(title); // apple
console.log(emoji); // 🍎

// Object
const Joey = {
  name: "Joey",
  age: 26,
  job: "Frontend developer",
};

function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(Joey);

// Object를 구조분해 후 변수에 각각 할당
const { name, age, job: ocupation, pet = "cat" } = Joey;
console.log(name);
console.log(ocupation); // job 대신 occupation이라고 변수 이름 변경
console.log(pet); // 새로운 키 쓰고 기본 값 설정도 가능

// Quiz
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log("quiz", color);
}
// 구조분해 할당도 중첩적으로 할 수 있음
changeColor(prop);
