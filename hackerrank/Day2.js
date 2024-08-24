/* 10 Days of Javascript - if-else */


const score = 11;

console.log(getGrade(score));


function getGrade(score) {
    let grade;

    if (score <= 30 && score > 25) {
        grade = 'A';
    } else if (score <= 25 && score > 20) {
        grade = 'B';
    } else if (score <= 20 && score > 15) {
        grade = 'C';
    } else if (score <= 15 && score > 10) {
        grade = 'D';
    } else if (score <= 10 && score > 5) {
        grade = 'E';
    } else if (score <= 5 && score >= 0) {
        grade = 'F';
    }

    return grade;
}

/* 10 Days of Javascript - switch */

const s1 = "bcdefgh";

console.log(getLetter(s1));


function getLetter(s1) {
    let letter;

    switch(s1.charAt(0)) {
        case ('a'|| 'e'|| 'i'|| 'o'):
            letter = 'A';
            break;
        case ( 'b'|| 'c'|| 'd'|| 'e'|| 'f'|| 'g'):
            letter = 'B';
            break;
        case ('h'||'j'|| 'k'|| 'l'|| 'm'):
            letter = 'C';
            break;
        default:
            letter = 'D';
    }

    return letter;
}

console.log(' ');
/* 10 Days of Javascript - loops */



const s2 = "javascriptloops";

vowelsAndConsonants(s2);

function vowelsAndConsonants(str) {

    let vowels = ["a", "e", "i", "o", "u"];

    for (let v of str) {
        if (vowels.includes(v))
            console.log(v);
    }

    for (let v of str) {
        if (!vowels.includes(v))
            console.log(v);
    }
}

