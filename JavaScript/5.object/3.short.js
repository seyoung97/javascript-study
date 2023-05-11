const x = 0;
const y = 0;

const coordinate = { x, y }; // {x: x,y: y,}의 축약 버전, 이름이 같으면 축약 가능

console.log(coordinate);
//{x:0, y:0}

function makeObj(name, age) {
  return {
    name, // name: name, 축약
    age, // age: age, 축약
  };
}
