// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식){ }
// 실행순서:
// 1. 변수선언문: 변수 초기화
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행: 값을 증감
// 4. 조건식이 거짓이 될떄까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 두개씩 증가
for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

// 중첩 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 반복문 제어: continue, break;
// break: 반복문을 특정 조건이 되면 멈추고싶을 때 사용
// continue: 특정 조건이 되면 아래 코드 무시하고 i증액하고 증액한 값이 true면 다음이 실행
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; //i가 10이 되면 아래 코드 무시하고 그 다음으로 넘어가게 함
    //9 다음에 10이 안찍히고 11이 찍힘
    console.log("i가 10이다");
    break; // i가 10이 되면 for loop를 멈출 수 있음
  }
  console.log(i);
}
