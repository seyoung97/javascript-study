// 조건문 Conditional Statement
// switch
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0:월, 1:화, ... 6:일

// if로 할 경우 월요일 부터 일요일까지 하나 하나 다 확인을 해야함
let dayName;
if (day === 0) {
  dayName = "월";
} else if (day === 1) {
  dayName = "화";
} else if (day === 2) {
  dayName = "수";
} else if (day === 3) {
  dayName = "목";
} else if (day === 4) {
  dayName = "금";
} else if (day === 5) {
  dayName = "토";
} else if (day === 6) {
  dayName = "일";
}

// switch로 하면 더 깔끔하게 할 수 있음
switch (day) {
  case 0:
    dayName = "월";
    break;
  case 1:
    dayName = "화";
    break;
  case 2:
    dayName = "수";
    break;
  case 3:
    dayName = "목";
    break;
  case 4:
    dayName = "금";
    break;
  case 5:
    dayName = "토";
    break;
  case 6:
    dayName = "일";
    break;
  default: //if문의 else처럼 동작
    console.log("해당하는 요일이 없음!");
}

console.log(dayName);
// 그 다음 케이스를 확인하지 않도록 break를 걸어주는 것이 중요!
//break를 걸지 않으면 day가 0이어도 다음 코드도 실행이 되기 때문에 dayName은 '일'이 됨

// But! break를 걸지 않아도 되는 경우도 있음
let condition = "okay"; //okay, good -> 좋음!, bad -> 나쁨
let text;
switch (condition) {
  case "okay":
  case "good":
    text = "좋음!";
    break;
  case "bad":
    text = "나쁨!";
    break;
}
console.log(text);
