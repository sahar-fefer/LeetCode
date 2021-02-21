var majorityElement = function(nums) {
    const dict = {};
    const majority = [];

    for (num of nums) {
        if (num in dict) dict[num]++
        else dict[num] = 1
    }
    Object.keys(dict).find(key => {
        if (dict[key] > (nums.length / 3)) {
            majority.push(key);
        }
    });
    return majority
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([1]))
console.log(majorityElement([1, 2]))