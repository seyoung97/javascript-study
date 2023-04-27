// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else { }
// if(조건1) { } else if(조건2) { } else { }
let fruit = "apple";
if (fruit === "apple") {
  console.log("사과");
} else if (fruit === "orange") {
  console.log("!!");
} else {
  console.log("??");
}

// if () 안에는 true 나 false로 평가될 수 있는 표현식이 들어감
// 조건이 true라고 평가될 때만 { } 안에 있는 식이 실행됨
// 따라서 조건이 0, 빈문자열(''), null, undefined 이면 false로 평가되기 때문에 { } 안에 식이 실행되지 않음!
