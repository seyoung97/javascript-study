// Map
const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍌"],
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has("key1")); // key로 확인

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys()); // key만
console.log(map.values()); // values만
console.log(map.entries()); // keys, values 모두

// 찾기
console.log(map.get("key1"));
console.log(map.get("key2"));
console.log(map.get("key4")); // 없는 키는 undefind

// 추가
map.set("key3", "🥝");
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// 삭제
map.delete("key3");
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는 우유" };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

// 구조상에서는 큰 차이가 없음
// 단 object는 함수를 사용할 수 없는 대신 map은 add, delete ...등 함수를 사용할 수 있음
console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는 우유' } 키에 동적으로 접근 가능
console.log(map2[key]); // undefined 맵은 키에 동적으로 접근 불가
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는 우유' } get함수를 통해 접근 가능
