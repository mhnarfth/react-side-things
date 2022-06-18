const add = (num1, num2) => num1+num2;

const sub = (num1, num2) => num1-num2;

const mul = (num1, num2) => num1*num2;


const num = [2, 3,4 ,4 ,34,234 ,4 ];
const total= num.reduce(((previous, current)=> previous+current), 0);
console.log(total);
// export {add, sub}