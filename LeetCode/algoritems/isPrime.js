// my solotion
const isPrime1 = (num) => {
    if (num <= 1) return false;
    for (let i = 1; i < num; i++) {
        for (let j = 1; j < num; j++) {
            if (i * j === num) return false;
        }
    }
    return true
}

// web solotion
const isPrime2 = (num) => {
    let dividor = 2;
    if (num === 1) return false;
    
    while (num > dividor) {
        if (num % dividor === 0) return false;
        else { dividor++ }
    }
    return true
}

console.log('1', isPrime1(1))
console.log('4', isPrime1(4))
console.log('7', isPrime1(7))
console.log('137', isPrime1(137))
console.log('237', isPrime1(237))

console.log('1', isPrime2(1))
console.log('4', isPrime2(4))
console.log('7', isPrime2(7))
console.log('137', isPrime2(137))
console.log('237', isPrime2(237))