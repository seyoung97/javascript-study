//연산자 우선순위
let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); //14
// *가 + 연산자 보다 우위 a + (b * 4)

result = a++ + b * 4;
console.log(result); //14
//*가 + 보다 우위, ++가 뒤에 있기 떄문에 필요한 연산을 한 다음에 증가 따라서 아직 증가 안됨
console.log(result); //15
// 연산이 끝난 후 a 가 증가한 값

result = (a + b) * 4;
// ()로 우선순위 조정 가능
console.log(result); //20
