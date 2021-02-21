var majorityElement = function (nums) {
    const dict = {};
    let majority = 0;

    for (num of nums) {
        if (num in dict) dict[num]++
        else dict[num] = 1
    }
    Object.keys(dict).find(key => {
        if (dict[key] > (nums.length / 2)) {
            majority = key;
        }
    });
    return majority
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));