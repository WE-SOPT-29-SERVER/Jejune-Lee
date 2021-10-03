// 함수 선언식
function add(x,y) {
    return x + y;
}
console.log(add(2,3));

//함수 표현식
const addStr = function (x,y) {
    return x+y;
};
console.log(addStr("안녕", "하세요"));

//함수 표현식 - 화살표 함수

const add = (x, y) => {
    return x+y;
};

const add = x => {
    return x;
};

const add = () => {
    return 1;
}

const add = (x, y) => x + y;

const square = x => x * x;

const person = (name, age) => ({name: name, age: age});

const person = function (name, age) {
    return {
        name: name,
        age: age,
    };
};
