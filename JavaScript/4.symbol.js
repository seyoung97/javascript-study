// Symbol 심볼
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = "key";
// const key2 = "key";
const key1 = Symbol("key");
const key2 = Symbol("key");
map.set(key1, "Hello");
console.log(map.get(key2));
// 그냥 변수에 할당했을 때 => Hello
// 원시 값이기 때문에 값이 똑같으면 같은 key라고 간주

// Symbol을 사용할 경우 => undefined
// 이름이 같더라도 symbol을 사용하면 서로 다른 값이 생성됨

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2); // true
console.log(Symbol.keyFor(k1)); // key
