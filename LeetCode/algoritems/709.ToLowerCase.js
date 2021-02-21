var toLowerCase = function (str) {
    let lowercase = str;
    for (let i = 0; i < lowercase.length; i++) {
        const letter = lowercase[i];
        let unicode = lowercase.charCodeAt(i);
        if (unicode >= 65 && unicode <= 90) {
            unicode = unicode += 32;
            lowercase = lowercase.replace(letter, String.fromCharCode(unicode))
            console.log(lowercase)

        }
        // console.log(lowercase)
    }
    return lowercase
};

// letter.charCodeAt(i)
// String.fromCharCode(letter)
// letter += 32;

console.log(toLowerCase('Hello'));
// console.log(toLowerCase('LOVELY'));