/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const smallerNumbersThanCurrentArr = [];

    for (let i = 0; i < nums.length; i++) {
        let smallerNumbersThanCurrent = 0;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] > nums[j]) smallerNumbersThanCurrent++;
        }

        smallerNumbersThanCurrentArr.push(smallerNumbersThanCurrent)
    }

    return smallerNumbersThanCurrentArr;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]))