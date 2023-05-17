// class의 확장
// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹는다");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹는다");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("논다");
//   }
// }

// 호랑이와 강아지 모두 color, eat, sleep 이라는 공통된 부분이 있음
// 이를 부모 class로 만들어 두고 상속할 수 있음

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹는다");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {
  // class Tiger는 Animal을 상속한다.
  // Tiger라는 class는 Animal이라는 청사진, 템플릿을 그대로 갖고 올거야라는 의미
  // 안에 아무것도 적지 않아도 Tiger라는 class가 만들어짐
}

const tiger = new Tiger("노랑이");
console.log(tiger); // Tiger {color: '노랑이'}
tiger.eat(); // 먹는다
tiger.sleep(); // 잔다

class Dog extends Animal {
  // 자식 class에 추가적으로 함수나 속성 작성 가능
  constructor(color, ownerName) {
    // 자식에서 프로퍼티 추가할 수 있으나
    // 부모 class에서 받아왔던 것도 다 작성해야 함
    super(color); //Animal에 있는 생성자 호출
    // super는 내가 상속하고 있는 부모를 가리킴
    // 부모 class에 정의된 생성자에 color를 전달
    this.ownerName = ownerName;
    // Dog class에만 ownerName 생성자를 정의
  }
  play() {
    console.log("논다");
  }

  // 오버라이딩 over riding
  eat() {
    console.log("강아지가 먹는다");
  }
  // 부모 class에도 eat이라는 함수가 있지만
  // 자식 class에서 그 함수를 다시 정의하면
  // 부모 class의 함수를 덮어 씌울 수 있음

  // 부모의 기능을 그대로 유지하면서 추가만 하는 방법
  sleep() {
    super.sleep();
    console.log("강아지가 잔다");
  }
  // super 키워드를 사용해 부모 class에서 정의된 sleep함수를 먼저 호출하고
  // 추가하고 싶은 기능을 작성하면 됨
}

const dog = new Dog("초록이", "엘리");
console.log(dog); // dog {color: '초록이', ownerName: '엘리'}
dog.eat(); // 강아지가 먹는다
dog.sleep(); // 잔다 강아지가 잔다
dog.play(); // 논다
