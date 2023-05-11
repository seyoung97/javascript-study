// 객체는 서로 연관된 정보와 함수를 묶어서 관리할 수 있다
const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}:🍎`);
    // 객체 안에서 자기 자신의 속성에 접근할 때는 this라는 속성을 붙여야함
  },
};

apple.display(); // apple object에 있는 display를 호출
// apple: 🍎
