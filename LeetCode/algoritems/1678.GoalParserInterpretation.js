/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let fixCommand = '';
    for (let i = 0; i < command.length; i++) {

        switch (command[i]) {
            case 'G':
                fixCommand += 'G'
                break;
            case '(':
                if (command[i + 1] === ')') {
                    fixCommand += 'o'
                    i++
                } else {
                    fixCommand += 'al'
                    i += 3
                }
                break;
        }
    }
    return fixCommand
};

console.log(interpret("G()(al)"))
console.log(interpret("G()()()()(al)"))
console.log(interpret("(al)G(al)()()G"))