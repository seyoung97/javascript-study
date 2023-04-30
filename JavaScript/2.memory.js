function add(a, b) {
  return a + b;
}

const sum = add;

console.log(sum(1, 2)); //3
console.log(add(1, 2)); //3

// 중요한 concept
// 1.함수의 이름은 함수가 저장된 메모리 위치 주소를 담은 변수와 동일하다.
// 2.따라서 또다른 변수에 함수를 할당하면 그 변수에도 함수의 주소가 할당된다.
// 3.그래서 sum()을 해도 함수 add를 호출할 수 있다.
