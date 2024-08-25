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