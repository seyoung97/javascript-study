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
