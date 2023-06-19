// Nullish Coalescing Operator
// ES11
// ?? null, undefined인 경우 실행
// || 는 모든 falshy한 경우 실행
let num = 0;
console.log(num || "-1"); // -1
// 0도 falshy이기 때문에 false로 판단 => -1 출력
console.log(num ?? "-1");
// 0은 null, undefined가 아니기 때문에 true이고 따라서 num이 가진 값 0이 출력된다.
