let integer = 123; //정수
let negative = -123; //음수
let double = 1.23; //실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b111011; //2진수
let octal = 0o173; //8진수
let hex = 0x7b; //16진수
console.log(binary); //123
console.log(octal); //123
console.log(hex); //123

console.log(0 / 123); //0
console.log(123 / 0); //Infinity 작은 숫자를 나눌 수록 숫자가 커지기 때문에 0을 나누면 무한적으로 나눌 수 있어서 infinity
console.log(123 / -0); //-Infinity
console.log(123 / "text"); //NaN (Not a Number)

let bigInt = 1234455667778899909877655432122435454657674254354n; //2의 53승이 넘는 큰 정수일 때는 뒤에 n
console.log(bigInt);
