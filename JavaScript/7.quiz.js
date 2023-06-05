// 퀴즈1: 주진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주진 배열을 수ㅇ하지 않도록 !
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

const fruits = ['🍌', '🍓', '🍇', '🍓']

function replace(array, from, to){
    return array.map(item => item === from ? to : item)
}

console.log('quiz1',replace(fruits, '🍓', '🥝'));

// 퀴즈2: 
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2

const fruits2 = ['🍌', '🥝', '🍇', '🥝']

// function count (arr, el) {
//    return arr.reduce((count, value)=>{
//     if(value === el){
//         count++;
//     }
//     return count
//    },0)
// }

function count (arr, el) {
    return arr.filter((value) => value === el).length
}

const result2 = count(fruits2, '🥝')
console.log('quiz2', result2)

// 퀴즈3: 배열1, 배열2, 두개의 배열을 전달받아, 
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

function match(input, search) {
   return input.filter(item => search.includes(item))
}

console.log('quiz3',match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']))


// 퀴즈 4
// 5 이상(보다 큰)의 숫자들의 평균
const nums = [ 3, 16, 5, 25, 4, 34, 21]

// function average (array) {
//     let newArr =  array.filter(value => value >= 5)
//     let sumArr =  newArr.reduce((sum, value)=>{
//         sum += value
//         return sum
//     } , 0)
//     return sumArr / newArr.length
// }

const average = nums //
.filter((num) => num > 5) //
.reduce((avg, num, _, arr) => avg + num / arr.length, 0)



console.log('quiz4', average);