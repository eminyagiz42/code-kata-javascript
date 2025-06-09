var x = 1;

function methodOne() {
    var x = 3;
}

methodOne();

console.log(x);

function methodTwo() {
    x = 4;
}

methodTwo();

console.log(x);