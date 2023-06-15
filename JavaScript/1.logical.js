// 논리연산자 Logical Operator
// && 그리고
// || 또는 
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶'}
const obj2 = { name: '🐱', owner: 'Joey'}

if(obj1 && obj2){
    console.log('둘다 true!');
}

let result = obj1 && obj2
console.log(result); // { name: '🐱', owner: 'Joey' }
// 왜 오브젝트가 출력?
// if문 조건문에서는 둘다 참인지 평가하지만
// 조건문 밖에서는 둘다 평가 하지 않고 단축 되어 평가 
// 앞에게 true이면 뒤에거(obj2)를 변수에 할당

result = obj1 || obj2
console.log(result); // { name: '🐶' }
// || 연산자인 경우 obj1이 true이니까 뒤에거는 보지 않고 바로 변수에 obj1을 할당

// 활용예 
// && 조건이 truthy일때, 무언가를 해야 할 경우
// || 조건이 falshy일때, 무언가를 해야 할 경우
function changeOwner(animal){
    if(!animal.owner){
        throw new Error('주인이 없어')
    }
    animal.owner = '바뀐 주인'
}

function makeNewOwner(animal){
    if(animal.owner){
        throw new Error('주인이 있어')
    }
    animal.owner = '새로운 주인'
}

obj1.owner && changeOwner(obj1)
obj2.owner && changeOwner(obj2)
console.log(obj1); // { name: '🐶' }
// obj1.owner && => false 이기 때문에 changeOwner(obj1)가 실행되지 않음
console.log(obj2); // { name: '🐱', owner: '바뀐 주인' }
// obj2.owner && => true 이기 때문에 changeOwner(obj2)가 실행됨

obj1.owner || makeNewOwner(obj1)
obj2.owner || makeNewOwner(obj2)
console.log(obj1); // { name: '🐶', owner: '바뀐 주인' }
// obj1.owner && => false(주인이 없음)이기 때문에 changeOwner(obj1)가 실행
console.log(obj2); // { name: '🐱', owner: '바뀐 주인' }
// obj2.owner && => true(주인이 있음)이기 때문에 changeOwner(obj2)가 실행안됨

// null 또는 undefined인 경우를 확인할때
let item; // = {price:1}
const price = item && item.price
console.log(price);

// 기본값을 설정
// default parameter는 전달하지 않거나, undefined로 설정된 경우에만 지정 가능
// || 는 값이 falshy한 경우 모두 설정 가능함: 0, -0, null, undefined, '' 
function print(message){
    const text = message || 'Hello'
    console.log(text);
}
print()