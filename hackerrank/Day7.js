/* 10 Days of Javascript - regexp 1 */

function regexVar() {
    //same character in the beginning and in the end
    return new RegExp('^([aieou]).*\\1$');
}

const re = regexVar();
const s = "abcdefga";// true
const s1 = "abcdefgb";// false
const s2 = "aewxyzae";// false

console.log(re.test(s2));
console.log(' ');


/* 10 Days of Javascript - regexp 2 */

function regexVar2() {
    return new RegExp('^(Mr|Mrs|Ms|Dr|Er)\\.[a-zA-Z]+$');
}

const re2 = regexVar2();
const s3 = "Mr.X";
const s4 = "Mrs.Y";

console.log(!!s3.match(re2));
console.log(' ');

/* 10 Days of Javascript - regexp 3 */

function regexVar3() {
    return new RegExp('\\d+', 'g');
}

const re3 = regexVar3();
const s5 = "102, 1948948 and 1.3 and 4.5";

const r = s5.match(re3);

for (const e of r) {
    console.log(e);
}