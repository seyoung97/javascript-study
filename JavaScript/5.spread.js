// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018년 부터
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));
// add(nums[0], nums[1], nums[2])를 간편하게 작성한 것

// Rest parameters
function sum(a, b, ...nums) {
  console.log(nums); // [ 3, 0, 2, 3, 5 ] 배열로 받아옴
}
sum(1, 2, 3, 0, 2, 3, 5);

// Array Concant
const fruits1 = ["🍑", "🍇"];
const fruits2 = ["🍌", "🍋"];
let arr = fruits1.concat(fruits2);
console.log(arr); // [ '🍑', '🍇', '🍌', '🍋' ]
arr = [...fruits1, ...fruits2];
console.log(arr); // [ '🍑', '🍇', '🍌', '🍋' ]
// spread 연산자를 사용하면 중간에 다른 아이템을 추가할 때 쉬움
arr = [...fruits1, "🍎", ...fruits2];
console.log(arr); // [ '🍑', '🍇', '🍎', '🍌', '🍋' ]

// Object
const Joey = {
  name: "Joey",
  age: 26,
};
const updated = {
  ...Joey,
  job: "Frontend engineer",
};
console.log(Joey);
// { name: 'Joey', age: 26 }
// updated라는 새로운 object를 만들기 때문에 기존의 Object는 변경하지 않음
console.log(updated);
// { name: 'Joey', age: 26, job: 'Frontend engineer' }
