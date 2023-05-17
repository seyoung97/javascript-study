// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적 방법)
// 2. class

// 클리스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
  // 클래스에 필요한 멤버함수는 보통 생성자 밖에서 정의
  // function 키워드 붙이면 안됨 오류 발생
}
// function 대신 class
// constructor: 생성자, class를 통해 객체를 만들 때 필요한 데이터를 채워주는 역할

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");
// apple은 Fruit 클래스의 인스턴스이다.
// = apple은 Fruit 클래스를 통해 만들어진 객체이다.

const obj = { name: "joey" };
// obj는 그냥 객체이고, 그 어떤 클래스의 인스턴스도 아니다.

console.log(apple);
console.log(orange);
console.log(apple.name); // 접근도 가능
