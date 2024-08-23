/* arithmetic-operators */

const length = 3;
const width =  4.5;

console.log(getArea(length, width));
console.log(getPerimeter(length, width));



function getArea(length, width) {
    return Number(length) * Number(width);
}


function getPerimeter(length, width) {
    return  (Number(length) + Number(width)) *  2;
}

/* function */

console.log(factorial(4))

function factorial(n) {
    if(n === 1){
        return 1;
    }
    return factorial(n-1) * n;
}


/* let-and-const */

let r = readLine();
const pi = Math.PI;
console.log(pi * Math.pow (r,2));
console.log(2 * pi * r);