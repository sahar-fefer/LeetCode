const orgenaizeBallsByColor = (arr) => {
    let left = 0;
    let right = 0;
    while (left < right) {
        let swichLeft = undefined;
        let swichRight = undefined;

        while (arr[left] === 'red') {
            left++;

        };
        swichLeft = left;
        while (arr[right] !== 'red') right--;
        swichRight = right;

        arr[left], arr[right] = arr[right], arr[left];
    }

    return arr
}

console.log(orgenaizeBallsByColor['yellow', 'red', 'red', 'green', 'yellow', 'yellow', 'red', 'green'])