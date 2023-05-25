// Math
// static property, method

console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI값

//static method
// 절대값
console.log(Math.abs(-10)); // 10
// 소수점 이하를 올림
console.log(Math.ceil(1.4)); // 2
// 소수점 이하를 내림
console.log(Math.floor(1.4)); // 1
// 반올림
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2
// 소수점에서 정수만 반환
console.log(Math.trunc(1.5342)); // 1

// 최대, 최소값 찾기
// 가장 큰 수 반환
console.log(Math.max(1,3,5)); // 5
// 가장 작은 수 반환
console.log(Math.min(1,3,5)); // 1

// 거듭제곱
console.log(3 ** 2); // 9
console.log(Math.pow(3,2)); // 9

// 제곱근 구하는 함수
console.log(Math.sqrt(9)); // 3

//랜덤한 값 반환
console.log(Math.random()); // 0부터 1사이의 랜덤한 숫자

// 1 ~ 10 사이 랜덤한 수 반환하기
console.log(Math.floor(Math.random() * 10 + 1)); 
