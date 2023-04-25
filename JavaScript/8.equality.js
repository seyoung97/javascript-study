//동등 비교 관계 연산자 Equality operators
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == "2"); //true
console.log(2 === "2"); //false
console.log(true == 1); //true
console.log(true === 1); //false
console.clear();

//object 비교
const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
//변수에 object를 할당하면 object 내용 자체는 메모리 어딘가에 저장되고 변수에는 저장된 메모리의 주소가 할당됨
//obj1과 obj2에는 서로 다른 메모리 주소가 저장되어있기 때문에 같을 수 없음
// 값 자체가 다르기 때문에 ===도 당연히 false

console.log(obj1.name == obj2.name); // true
// 둘다 'js'라는 값을 갖고 있기 때문

let obj3 = obj2;
// obj2가 가지고 있는 참조값(메모리 주소)를 obj3에 할당
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true
// 동일한 메모리 주소 값을 갖고 있기 때문
