var singleNumber = function(nums) {
    let dict = {};
    for (num of nums) {
        if (num in dict) {
            dict[num] = 2
        } else {
            dict[num] = 1
        }
    }
    return Object.keys(dict).find(key => dict[key] === 1);
};

console.log(singleNumber([3, 2, 2]))