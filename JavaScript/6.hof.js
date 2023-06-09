const fruits = ['🍌', '🥝', '🍇', '🥝']

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i])
}

// 배열을 빙글 빙글 돌면서 원하는것을 할때
// 배열에 있는 forEach 함수를 사용하면 됨
fruits.forEach(function(value, index, array){
    // 배열의 요소 value, index 그리고 배열 전체를 받아서
    // 배열의 요소 하나 출력할 때마다 요소의 index 와 배열 전체 같이 출력됨
    console.log('--------------------');
    console.log(value);
    console.log(index);
    console.log(array);

})

// 축약해서 사용
fruits.forEach((value)=>
    console.log('축약', value)
)

// 조건에 맞는(콜백함수) 아이템을 찾을때
// 배열에 있는 find함수 사용
const item1 = {name: '🥛', price:2}
const item2 = {name: '🍪', price:3}
const item3 = {name: '🍙', price:1}
const products = [item1, item2, item3, item2]

let result = products.find((value)=> {
    // 배열의 요소를 받아서
    return value.name === '🍪'
    // 조건에 부합 (true)라면 해당 요소를 반환
})
console.log('find', result);

// findIndex: 제일 먼저 조건에 맞는 요소의 인덱스를 반환
result = products.findIndex((value)=>{
    return value.name=== '🍪'
})
console.log('findIndex',result); // 1

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
// sonme 함수: 배열의 한 요소라도 조건에 부합하면 true 반환
result = products.some((item)=>{
    return item.name === '🍪'
})
console.log(result); // true

// 배열의 모든 아이템들이 조건(콜백함수)에 맞는지 확인
// every 함수: 배열의 모든 요소가 조건에 부합하면 true 반환
result = products.every((item)=>{
    return item.name === '🍪'
})
console.log(result); // false

// filter: 조건에 맞는 아이템들을 새로운 배열로!
result = products.filter((item)=>{
    return item.name === '🍪'
})
console.log(result); // [ { name: '🍪', price: 3 }, { name: '🍪', price: 3 } ]

console.clear()

// Map
// 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는
// 변환해서 새로운 배열 생성
const nums = [1,2,3, 4,5]
result = nums.map((item) => item * 2)
console.log('map', result); // [ 2, 4, 6, 8, 10 ]
// map 내에서 보다 복잡한 함수도 가능
result = nums.map((item)=>{
    if(item % 2 === 0 ){
        return item * 2
    } else {
        return item
    }
})
console.log('complex map', result); // [ 1, 4, 3, 8, 5 ]

// flatMap 중첩된 배열을 쫙 펴줌
result = nums.map((item)=> [1,2])
console.log(result); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
result = nums.flatMap((item)=> [1,2])
console.log(result); // [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ]

// sort: 배열 아이템들 정렬
// 기본: 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
// 새로운 배열 반환하지 않음
const texts = ['hi', 'abc']
texts.sort()
console.log(texts); // [ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10]
numbers.sort()
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ]

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
    sum += value
    return sum
},0)
console.log('reduce', result);