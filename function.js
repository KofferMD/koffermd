'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let   num = 10;
}

showFirstMessage("Hello World");
console.log(num); 

function calc(a, b) {
    return (a + b);
} 

console.log(calc(4, 5));
console.log(calc(1, 6));
console.log(calc(2, 10));
console.log(calc(3, 29));


function ret() {
    let num = 50;
    return num;
} 

const anotherNum = ret();
console.log(anotherNum);   



const cup = function() {
    console.log('hello');
};
cup();




const cal = (a, b) => {
    console.log(4, 2);  
    return a + b;
};    