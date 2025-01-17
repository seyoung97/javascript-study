// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 출력하고 싶음
// function iterate(max, action)

const print = (a) => {
  console.log(a);
};

const double = (a) => {
  console.log(a * 2);
};

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(5, print); // 함수를 정의해서 전달
iterate(5, (num) => console.log(num)); // 화살표 함수로 전달

//예: setTimeout 고차함수
setTimeout(() => {
  console.log("2초뒤 이 함수가 실행"); //콜백함수
}, 2000);
