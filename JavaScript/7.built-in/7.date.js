// Date의 기준: UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 현재 시간 출력
console.log(new Date('May 22, 2023')); // 날짜 지정
console.log(new Date('2023-05-22T03:10:00')); // 시간까지 지정 가능

console.log(Date.now());// 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기
console.log(Date.now('2023-05-22T03:10:00'));// 밀리초 단위로 표시

const now = new Date()
// 인스턴스 레벨의 함수 사용
now.setFullYear(2023) // 년도 설정
now.setMonth(10) // 월 설정 0이 1월임
console.log(now.getFullYear()); // 년도 반환
console.log(now.getDate()); // 날짜 반환, 날짜도 0부터 시작함
console.log(now.getDay()); // 요일 반환, 0이 일요일 1...6: 토요일

console.log(now.toString()); // 문자열로 반환
console.log(now.toDateString()); // 날짜만
console.log(now.toTimeString()); // 시간만
console.log(now.toISOString()); // ISO 8601 형식
