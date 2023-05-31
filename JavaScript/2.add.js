const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 배열 아이템을 참조하는 방법
// 배열 이름 뒤에 인덱스
console.log(fruits[0]); // 🍌
console.log(fruits[1]); // 🍎
console.log(fruits[2]); // 🍇
console.log(fruits[3]); // 🍑

// length
// 배열 안에 몇개의 아이템이 있는지 보여줌
console.log(fruits.length); // 4

// for loop를 활용해 배열 차례대로 출력하기
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 💩
fruits[4] = "🍓";
// 인덱스로 바로추가
// 실수로 이미 있는 인덱스를 써서 이미 있던 아이템을 덮어 씌우거나
// 바로 다음 인덱스가 아닌 멀리 떨어져있는 인덱스를 써서 중간에 빈 공간을 만들기 쉬움

delete fruits[1];
// delete 키워드, 인덱스로 바로 삭제
// 삭제되긴 하지만 그자리가 빈자리로 남아 있음

// 자ㄹ라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2)
// 잘라진 새로운 배열을 리턴한다
console.log(newArr); // ['🍌', '🍎']
console.log(fruits); // ['🍌', '🍎', "🍇", "🍑"]

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2)
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
console.clear()

// 순서를 거꾸로
const arr4 = arr3.reverse()
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ] 

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3], [4, [5, 6]]
]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ]]
// flat은 기본적으로 1단계 중첩까지만 풀어줌 
console.log(arr.flat(2)); // [ 1, 2, 3, 4,  5, 6 ]
// 괄호 안에 몇단계까지 풀지 지정해주면 1단계 이상의 중첩도 풀 수 있음
arr = arr.flat(2)

// 특정한 값으로 배열 채우기
arr.fill(0) // 배열 자체를 수정
console.log(arr); // [ 0, 0, 0, 0, 0, 0]
// 인덱스값 지정해서 그만큼만 특정한 값으로 채우도록 할 수 있음
arr.fill('s', 1, 3)
console.log(arr); // [0, 's', 's', 0, 0, 0]

// 배열을 문장열로 합하기
let text = arr.join()
console.log(text); // 0,s,s,0,0,0
// 쉼표 말고 다른 걸로 합치기를 원하면 
text = arr.join('|')
console.log(text); // 0|s|s|0|0|0