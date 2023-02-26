//변수란?
//값을 저장하는공간
//자료를 저장할 수 있는 이름이 주어진 기억장소

let a = 0;
console.log(a);

a = 1; //값의 재할당
console.log(a);

let b;
console.log(b); //undefine

b = 2;
console.log(b); //2

// 나쁜예제: 너무 광범위해서 어떤 의미인지 유추 불가
let number = 26;

// 좋은예제
let myAge = 26;
// 숫자에 의미를 부여

// 나쁜예제: 여러개의 변수를 1,2,3... 숫자로 구분
let audio1;
let audio2;

// 좋은예제
let backgroundAudio;
let windAudio;

//꿀팁
//구체적인 걸 뒤로 뺴기
let audioBackground;
let audioWind;
// 이렇게하면 나중에 audio만 쳐도 자동 완성으로 관련된 변수들이 바로 보임
