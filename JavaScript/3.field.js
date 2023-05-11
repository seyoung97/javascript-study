// 접근제어자 - 캡슐화
// 인스턴스가 한번 만들어지면 외부에서 변경 불가능하게 할때 사용
// private(#): 내부에서 사용 가능, 외부에서 접근 불가
// public(기본): 외부에서도 접근 가능
// protected:

class Fruit {
  #name;
  #emoji;
  // 외부로 부터 전달 받은 property(변수), 생략 가능
  #type = "과일";
  // class가 만들어 지자마자 '과일'이라고 초기화 되는 property
  // name, emoji, type 이런 것들을 field라고 함
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}:${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
//apple.#name = '오렌지' // #field는 외부에서 접근 불가능하다고 에러 남
console.log(apple);
