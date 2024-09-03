/* 10 Days of Javascript - bitwise */

function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let and = i & j;
            if (and < k && and > max) {
                max = and;
            }
        }
    }
    return max;
}

const n = 9;
const k = 2;
console.log(getMaxLessThanK(n, k));
console.log(' ')


/* 10 Days of Javascript - date */

function getDayName(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {weekday: 'long'}); //Sunday
}

const date = "10/11/2009";

console.log(getDayName(date));
