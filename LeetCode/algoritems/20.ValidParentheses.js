var isValid = function (s) {
    const parentheses = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
