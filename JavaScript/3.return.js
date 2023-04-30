// 만약에 return a + b 가 없다면(return을 명시적으로 하지 않으면) undefined가 반환됨
// 이는 자바스크립트엔진에서 자동으로 return undefined을 처리해주기 때문
function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result); //3

// return 생략 가능
// 값을 반환해야하는 함수가 아닌 경우

//return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num) {
  if (num < 0) {
    return; // return undefined의 약자, 조건에 부합하지 않은 인자가 들어올 경우 함수를 즉시 종료시킴
  }
  console.log(num);
}

print(12);
print(-12);
