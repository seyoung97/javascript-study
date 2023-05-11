// 생성자 함수
// 특정한 템플릿에 맞게 객체를 쉽게 생성할 수 있도록 해주는 함수

// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}:🍎`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}:🍊`);
//   },
// };

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
  //function 키워드 사용해도 되고 간편하게 화살표함수 써도 됨
  return this; // 생략가능, 생성자함수에서는 자동으로 this가 return 되도록 자바스크립트 엔진이 설정함
}
// 함수 이름의 첫 글자를 대문자로하면 생성자 함수 만들 수 있음
// this라는 키워드를 이용하면 객체 자기 자신을 가리킬 수 있음
// this.name 이라고 하는 순간 이 객체에 name이라는 키가 생성됨
// name이라는 키값의 value는 인자로 전달 받은 name이 할당됨
// emoji도 마찬가지

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name); // 접근도 가능
