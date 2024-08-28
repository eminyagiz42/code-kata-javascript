/* 10 Days of Javascript - objects */

const a = 4;
const b = 5;

const rec = new Rectangle(a, b);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);


function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = (Number(a) + Number(b)) * 2;
    this.area = Number(a) * Number(b);
}


/* 10 Days of Javascript - count-objects */

let objects = [
    {x: 1, y: 2},
    {x: 4, y: 4},
    {x: 7, y: 7},
];

console.log(getCount(objects));

function getCount(objects) {
    let count = 0;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            count++;
        }
    }
    return count;
}


/* 10 Days of Javascript - class */

class Polygon {
    constructor(sides) {
        this.s = sides;
    }
}

Polygon.prototype.perimeter = function () {
    return this.s.reduce((a, b) => a + b);
}

const rectangle1 = new Polygon([10, 20, 10, 20]);
const square1 = new Polygon([10, 10, 10, 10]);
const pentagon1 = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle1.perimeter());
console.log(square1.perimeter());
console.log(pentagon1.perimeter());