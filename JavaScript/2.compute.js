// 대괄호표기법 활용 예시
const obj = {
  name: "ellie",
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 적근하고 싶을때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
}
//key가 정적인 것이 아니고 어떤 key가 들어올지 모르기 때문에 obj.key라고 접근할 수 없음

console.log(getValue(obj, "name")); // ellie

// 대괄호 표기법으로 obj에 새로운 key와 value도 추가할 수 있음
function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, "job", "engineer");

// key 삭제도 가능
function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, "name");
