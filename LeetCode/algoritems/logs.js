/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let encodedList = [];
    for (let i = 0; i < nums.length; i += 2) {
        const curList = [];
        for (let j = 0; j < nums[i]; j++) {
            curList.push(nums[i + 1])
        }
        encodedList = encodedList.concat(curList);
    }
    return encodedList;
};

console.log(decompressRLElist([1, 2, 3, 4]))

