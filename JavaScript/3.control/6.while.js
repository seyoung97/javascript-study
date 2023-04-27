// while(조건){ }
// 조건이 맞으면 계속해서 코드블럭을 실행시킴
// 즉 조건이 false가 될때까지 { } 코드블럭을 반복 실행
// while은 for과 달리 변수를 초기화 하거나 증감하는 부분이 없기 때문에 외부에서 작성해줘야함

// 예제 1
let num = 5;
while (num >= 0) {
  //num이 0보다 크거나 작을때까지 실행
  console.log(num);
  num--;
  //num을 1씩 감소
}

// 예제 2
// while문에서도 break, continue 사용 가능
let isActive = true;
let i = 0;
while (isActive) {
  console.log("아직 살아있다");
  if (i === 100) {
    break;
  }
  i++; // i를 증감하는 조건이 없으면 i가 100이 될 수 없어서 무한루프가 되니 꼭 작성!
}

// do while
let isActive2 = false;
do {
  // 일단 먼저 실행하고
  console.log("do-while");
} while (isActive2); // 조건 검사
// while vs do-while
// while은 먼저 조건을 검사하고 true인 경우에만 코드블럭을 실행
// do-while은 일단 do { } 다음에 있는 코드블럭을 실행하고 while의 조건을 검사
// do-while의 경우 일단 처음에 무조건 한번은 꼭 실행해야하는 경우 사용
