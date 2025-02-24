//Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    //Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

//Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block scope
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

//Practice Task - Variable reassignment
// function newBlock(){
//     var varOne = "var one";
//     let letOne = "let one";
//     const constoOe = "const one";

//     var varOne = "var two";
//     let letOne = "let two";
//     const constOne = "const two";
// }

// var varOne = "var three";
// let letOne = "let three";
// const constOne = "const three";
