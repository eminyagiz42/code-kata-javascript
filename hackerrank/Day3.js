/* 10 Days of Javascript - arrays */

//const nums = [2, 3, 6, 6, 5];
const nums = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];

console.log(getSecondLargest(nums));

function getSecondLargest(nums) {
    //nums.sort(); it is only sorting for one digit
    nums.sort( (a, b) => parseInt(b, 10) - parseInt(a, 10) )
    let highest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== highest) {
             return nums[i];
        }
    }
}


/* 10 Days of Javascript - try-catch-and-finally */

//const s1 = "1234";
const s1 = Number(1234);

reverseString(s1);


function reverseString(s1) {
    try {
        s1 = s1.split('').reverse().join('');
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(s1);
    }
}




/* 10 Days of Javascript - throw */

/*
const n = +(readLine());

for (let i = 0; i < n; i++) {
    const a = +(readLine());

    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}


function isPositive(a) {

}



 */