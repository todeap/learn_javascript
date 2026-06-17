function firstPrimeInBetween(n, m) {
    for(let i = n; i <= m; i++) {
        if(checkPrime(i)) {
            return i;
        }
    }
    return -1;
}

function checkPrime(i) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if(i % j === 0) return false;
    }
    return true;
}

const result = firstPrimeInBetween(35, 40);
console.log("First Prime in between 35 and 40 is :", result);