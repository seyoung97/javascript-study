// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  // generator를 만들 때는 반드시 function 뒤에 *을 붙여야 함
  // 이거는 generator다 라는 표시임
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
      // yield는 return이랑 비슷한 역할을 하는데
      // 단 사용자가 다음거를 원할 때(next를 호출할 때) 반환
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0 false

// 외부에서 generator를 control 할 수 있음
//multiple.return(); // 종료를 의미
multiple.throw("Error!"); // error를 던짐

next = multiple.next();
console.log(next.value, next.done);
