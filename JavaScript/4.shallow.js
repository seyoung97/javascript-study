// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐
const pizza = {name: '🍕', price: 2}
const ramen = {name: '🍜', price: 3}
const sushi = {name: '🍣', price: 1}

const store1 = [pizza, ramen]
const store2 = Array.from(store1) 
console.log(store1); // [ {name: '🍕', price: 2}, {name: '🍜', price: 3} ]
console.log(store2); // [ {name: '🍕', price: 2}, {name: '🍜', price: 3} ]

store2.push(sushi)
console.log(store2); // [ {name: '🍕', price: 2}, {name: '🍜', price: 3}, {name: '🍣', price: 1} ]

pizza.price = 4
console.log(store1); // [ {name: '🍕', price: 4}, {name: '🍜', price: 3} ]
console.log(store2); // [ {name: '🍕', price: 4}, {name: '🍜', price: 3}, {name: '🍣', price: 1} ]
// store1과 2의 pizza 가격을 바꾸지 않았는데도 가격이 인상되어있음 => shallow copy!
// store에 들어 있는 오브젝트는 사실 오브젝트의 주소임
// 따라서 오브젝트 자체를 수정하면 store도 수정된 오브젝트의 주소를 참조하고 있기 때문에
// 수정됨 오브젝트가 출력됨
