
const age = 31;
let canVote = (age < 18) ? "Too young" : "Old enough";

console.log(canVote); // Old enough


const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + "<br>";
}