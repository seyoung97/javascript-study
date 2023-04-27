// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우
let fruit = "apple";
if (fruit === "apple") {
  console.log("사과");
} else if (fruit === "orange") {
  console.log("!!");
} else {
  console.log("??");
}

fruit === "apple" ? console.log("사과") : console.log("아님");

//삼항 연산자를 활용해 조건에 따라 다른 값을 변수에 할당 할 수 있음
let emoji = fruit === "apple" ? "사과" : "아님";
console.log(emoji); //사과
