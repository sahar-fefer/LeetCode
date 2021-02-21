/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const dict = {};
    for (num of nums) {
        if (num in dict) {
            dict[num]++;
        } else {
            dict[num] = 1;
        }
    }
    return Object.keys(dict).find(key => dict[key] === 1);
};

console.log(singleNumber([2, 2, 3, 2]))