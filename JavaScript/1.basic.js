// 사용예제1
function add(num1, num2) {
  console.log("function");
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

// 사용예제2
function fullName(firstName, lastName) {
  return `${firstName} + ${lastName}`;
}

let lastName = "정";
let firstName = "세영";
console.log(fullName(firstName, lastName));
