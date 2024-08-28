/* 10 Days of Javascript - inheritance */

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify(['constructor'])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}
console.log(' ');



/* 10 Days of Javascript - template-literals */

function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];

    const d = Math.sqrt(Math.pow(perimeter, 2) - 16 * area);

    const s1 = (perimeter + d) / 4;
    const s2 = (perimeter - d) / 4;

    return [s1, s2].sort();
}

let s1 = 10;
let s2 = 14;

[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);
console.log(' ');



/* 10 Days of Javascript - arrows */

const a = [1, 2, 3, 4, 5];

console.log(modifyArray(a));

function modifyArray(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0 ) { // is even number
            result.push(nums[i] * 2);
        } else  if(nums[i] % 2 !== 0 ) { // is odd number
            result.push(nums[i] * 3);
        }
    }
    return result;
}
