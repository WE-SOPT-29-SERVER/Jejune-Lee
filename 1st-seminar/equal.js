const num = 1;
const str = '1';

// 값만 비교
console.log(num == str); //true

console.log(Number(num) + Number(str));
console.log(typeof(Number(num) + Number(str))); // Number

console.log(String(num) + String(str));
console.log(typeof(String(num) + String(str))); // String

// 값과 타입 모두 비교
console.log(num === str);

// null undifined
console.log(typeof (1)); //number
console.log(typeof ("str")); //string
console.log(typeof (true)); //boolean
console.log(typeof (undefined)); //undefined
console.log(typeof (Symbol())); //symbol
console.log(typeof (null)); //object