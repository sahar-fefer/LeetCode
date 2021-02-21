const reverseStr = (str) => {
    let left = 0;
    let right = str.length-1;
    let rightLetter = '';
    while (left < right) {
        rightLetter = str[right];
        str[left] = str[right];
        console.log(str);
        str[rightLetter] = str[left];
        console.log(str);
        left++;
        right--;
    }
    return str;
}

console.log(reverseStr(["h","e","l","l","o"]))