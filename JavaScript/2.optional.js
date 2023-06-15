// 옵셔널 체이닝 연산자 Optional Chaning Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined인 경우를 확인할때
let item = {price:1}
const price = item?.price
console.log(price);

let obj = {name:"🐶", owner: {name: 'Joey'}}
function printName(obj){
    const ownerName = obj?.owner?.name
    // 옵셔널 체이닝 말고 &&로만 작성하면
    // const ownerName = obj && obj.owner && obj.owner.name 이렇게 길어짐
    console.log(ownerName);
}
printName()// undefined