// 퀴즈1: 주진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주진 배열을 수ㅇ하지 않도록 !
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

const fruits = ['🍌', '🍓', '🍇', '🍓']

function replace (arr, from, to) {
    let newArr = [...arr]
    for(let i = 0; i < arr.length; i++){
 if(arr[i] === from){
    newArr[i] = to
 }
}
return newArr
}

const result = replace(fruits, '🍓', '🥝')
console.log(result)

// 퀴즈2: 
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2

const fruits2 = ['🍌', '🥝', '🍇', '🥝']

function count (arr, el) {
    const filtered = arr.filter(fruit => fruit === el )
    const filteredLength = filtered.length
    return filteredLength
}

const result2 = count(fruits2, '🥝')
console.log(result2)

// 퀴즈3: 배열1, 배열2, 두개의 배열을 전달받아, 
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

function match(input, search) {
    const result = []
    for(let i=0; i< input.length; i++){
        if(search.includes(input[i])){
            result.push(input[i])
        }
    }
    return result
}

console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']))



