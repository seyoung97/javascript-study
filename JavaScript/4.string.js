// 문자열타입
let string = "안녕하세요";
string = `안녕`;

// 특수 문자 출력하는 방법
// 따옴표까지 출력하고싶은 경우 서로 다른 따옴표를 쓰면 가능 ex)"'안녕'", '"안녕"'
string = "'안녕'";

// 줄 바꿈 \n 탭 \t 백슬러시를 출력하고 싶을 때는 \\두개
string = "안녕!\n엘리야!\t\t내 이름은\\";
console.log(string);
// 이스케이프 표현: 백슬러시를 사용해 일반 문자 말고 특수문자를 사용하는 방법

// 템플릿 리터럴 (template Literal) ``
let id = "엘리";
let greetings = "'안녕!, " + id + "😀\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}😀
즐거운 하루 보내요!'`;
console.log(greetings);
