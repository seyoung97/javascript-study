// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); // 3

// set안에 아이템이 존재하는지 확인
console.log(set.has(2)); // 있음 true
console.log(set.has(4)); // 없음 false

// 순회
set.forEach((item) => console.log(item));

for (const value of set.values()) {
  console.log(value);
}

// set에 새로운 아이템 추가
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
// 있는데 추가하면?
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
// 배열과 달리 중복이 불가하기 때문에 무시됨

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = { name: "🍎", price: 8 };
const obj2 = { name: "🍌", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// quiz
// obj1의 가격은 변경하고 objs에 추가하면 3개가 될까?
obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } }
// 안됨 shallow copy, set에는 오브젝트의 주소가 복사되는 것이기 때문

// quiz2
const obj3 = { name: "🍌", price: 5 };
// obj2와 같은 내용
objs.add(obj3);
// objs는 3이 될까?
console.log(objs);
// Set(3) {{ name: '🍎', price: 10 },{ name: '🍌', price: 5 },{ name: '🍌', price: 5 }}
// 3이 됨.
// obj는 heap이라는 공간에 만들어지고 그 주소를 참조하고 있기 때문에
// 내용은 같아도 참조 주소가 달라서 중복이라고 여기지 않음
