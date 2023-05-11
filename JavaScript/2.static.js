// static 정적 프로퍼티, 메서드

class Fruit {
  static MAX_FRUITS = 4;
  // 함수 말고 속성 앞에도 static 키워드 사용 가능
  // 클래스 레벨에 지정해두었기 때문에 인스턴스 레벨에서는 접근할 수 없고
  // Fruit이라는 클래스를 통해서만 접근 가능

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 인스턴스 레벨의 메서드
  // 인스턴스에서 받아오는 인자들과 밀접하게 관련이 있기 때문에 인스턴스 레벨에 두는게 좋음
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };

  //클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    // 클래스는 그저 템플릿이기 때문
    return new Fruit("banana", "🍌");
  }
}

// 클래스 레벨의 메서드는 만들어진 오브젝트에서 호출하는 것이 아니라
// Fruit이라는 class에 있는 static 함수를 직접적으로 호출할 수 있음
const banana = Fruit.makeRandomFruit();

//인스턴스 레벨의 함수는 만들어진 인스턴스를 통해서만 접근 가능
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name); // 접근도 가능

// static 함수 예시
Math.pow();
Number.isFinite(1);

// static을 이용하면 굳이 별도의 오브젝트를 만들지 않고도 비슷한 내용의 함수들을 묶어서 관리할 수 있다는 장점이 있음
