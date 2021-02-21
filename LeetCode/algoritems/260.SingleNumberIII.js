var singleNumber = function (nums) {
    const dict = {};
    const appearOnce = [];

    for (num of nums) {
        if (num in dict) {
            dict[num] = 2
        } else {
            dict[num] = 1
        }
    }
    Object.keys(dict).find(key => {
        if (dict[key] === 1) {
            appearOnce.push(key)
        }
    });
    return (appearOnce)
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]))