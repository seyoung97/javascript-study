//퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// if 문 사용
if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log("👎");
}

// ternary 사용
//num % 2 === 0 ? console.log("👍") : console.log("👎");
let emoji = num % 2 === 0 ? "👍" : "👎";
console.log(emoji);
