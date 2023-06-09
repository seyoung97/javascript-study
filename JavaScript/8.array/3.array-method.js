// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 특정한 오브젝트가 배열인지 체크
// isArray static 함수 사용
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을때
// 인스턴스레벨의 indexOf 함수 사용
console.log(fruits.indexOf("🍌")); //0

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes("🍌")); // true

// 추가 - 제일 뒤
let length = fruits.push("🍐"); // 배열 자체를 수정(업데이트)
console.log(fruits); // ["🍌", "🍎", "🍇", "🍑", "🍐"]
console.log(length); // 5 push 함수는 추가한 후 배열의 길이를 return 함

// 추가 - 제일 앞

length = fruits.unshift("🥝"); // 배열 자체를 수정(업데이트)
console.log(fruits); // ['🥝', "🍌", "🍎", "🍇", "🍑", "🍐"]
console.log(length); // 6

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits); // ['🥝', "🍌", "🍎", "🍇", "🍑"]
console.log(lastItem); // "🍐" pop 함수는 제거한 제일 마지막 아이템을 리턴

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits); // ["🍌", "🍎", "🍇", "🍑"]
console.log(lastItem); // '🥝' shift 함수는 제거한 제일 첫 아이템을 리턴

// 중간에 추가 또는 삭제
// splice로 삭제
const deleted = fruits.splice(1, 1); // (시작하는 인덱스, 삭제할 개수) 배열 자체를 수정(업데이트)
console.log(fruits); // ["🍌", "🍇", "🍑"]
console.log(deleted); // ["🍎"] splice 함수는 삭제된 아이템(들)을 배열 형태로 반환

//splice로 추가
fruits.splice(2, 0, "🍊", "🍋"); // (시작하는 인덱스, 삭제할 개수) 배열 자체를 수정(업데이트)
// 삭제할 개수 자리에 0 -> 아무것도 삭제 안함
// 그 뒤에 추가할 아이템 작성 (여러개도 가능)
console.log(fruits); // ["🍌", "🍇", '🍊', '🍋', "🍑"]
