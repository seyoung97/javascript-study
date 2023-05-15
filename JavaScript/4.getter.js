// 접근자 프로퍼티 (Accessor property)
//.***() 이런식으로 호출하면서 접근하지 않고 프로퍼티 접근할 때 처럼 .*** 이렇게 접근할 수 있도록 함
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  // get 접근자 프로퍼티
  // fullName에 접근할 때 함수 호출
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //프로퍼티에 가까운 함수(프로퍼티끼리 조합만 함)일 때 함수 호출 안하고 바로 접근할 수 있도록 함

  // set 접근자 프로퍼티
  set fullName(value) {
    console.log(value);
  }
  // student.fullName에 특정한 값을 할당하면 set이 호출됨
}

const student = new Student("정", "세영");
//console.log(student.fullName); // 접근자 프로퍼티 없을 때는 이렇게 호출해야 함
console.log(student.fullName); // 정 세영
// 접근하면 get이라는 함수가 호출이 되어서 fullName이 출력

student.fullName = "김 철수"; // 김 철수
