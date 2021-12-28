// var function scope
if(true){
    var x = "var";
}
console.log("var", x);


//let, const block scope
// if(true){
//     let y = "let";
//     const z = "const";
// }
// console.log("const", z);
// console.log("let", y);

//스코프 관계
function colorFunction(){
    if (true){
        var color = "blue";
        console.log(color);
    }
    console.log(color);
}
console.log(color);

