// type of:데이터 타입을 확인 할  때 사용 하는 연산자.
// 데이터의 값을 문자열로 반환 해주는 연산자
let varialble;
console.log(typeof varialble); // undefined

varialble = "";
console.log(typeof varialble); //string

varialble = 123;
console.log(typeof varialble); // number

// javasicript 는 할당 된 값에 따라 type 이 동적으로 할당된다.
// weakly typed => type이 있기는 있는데 할당된 값이 변경되면 타입도 같이 동적으로 변경됨
// strongly typed => 코드를 작성하는 때 부터 타입을 정적으로 지정함 숫자 타입이 지정된 변수에 문자열 할당할 수 없음 ex)Java

varialble = function () {};
console.log(typeof varialble); // function

varialble = Symbol();
console.log(typeof varialble); //symbol

//javasicript is dynamic, weakly typed programming language
